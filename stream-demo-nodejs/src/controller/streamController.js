// Dùng cho async/await
import { promises as fsPromises } from "fs";
// Dùng cho streaming
import fs from "fs";
import path from "path";
import { videosDir } from "../config/videoConfig.js";
import { parseRangeHeader } from "../utils/rangeUtils.js";
import * as response from "../response/response.js";
import * as validate from "../utils/validate.js";

export const getNameFiles = async (req, res) => {
  try {
    const files = await fsPromises.readdir(videosDir);
    return response.successResponse(res, { files });
  } catch (err) {
    console.error("Error reading directory:", err);
    return response.errorResponse(res, { message: err.message });
  }
};

// API 2: stream video theo tên
export const streamVideo = async (req, res) => {
  try {
    // lay ten video tu param
    const { videoName } = req.params;
    if (!validate.isValidFileName(videoName)) {
      return res.errorResponse(res, { err }, 400);
    }
    const videoPath = path.join(videosDir, videoName);

    const stats = await fsPromises.stat(videoPath);

    const range = req.headers.range;
    const videoSize = stats.size;
    // parse range header, ví dụ: "bytes=0-999999"

    const rangeObj = parseRangeHeader(videoSize, range);

    if (!rangeObj) {
      return response.errorResponse(
        res,
        { message: "Requested Range Not Satisfiable" },
        416
      );
    }
    const { start, end } = rangeObj;
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, {
      start,
      end,
    });
    // gắn listener
    // Log mỗi chunk đọc ra
    videoStream.on("data", (chunk) => {
      console.log(`Read chunk of size: ${chunk.length} bytes`);
    });

    // .on("error", callback) = bắt lỗi xảy ra trong quá trình đọc file.
    // Ví dụ lỗi: file bị xóa đột ngột, không có quyền đọc, lỗi IO…
    videoStream.on("error", (err) => {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Stream error" });
      }
    });

    // Khi hết file/chuỗi chunk
    videoStream.on("end", () => {
      console.log("Finished streaming chunk");
    });

    videoStream.pipe(res);
  } catch (err) {
    console.error("Async error:", err);
    // Chỉ gửi lỗi khi header chưa gửi
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  }
};
