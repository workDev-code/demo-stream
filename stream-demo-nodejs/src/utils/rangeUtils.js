import rangeParser from "range-parser";
import { errorResponse } from "../response/response.js";

/**
 * Parse range header của HTTP request
 * @param {number} fileSize Kích thước file
 * @param {string} rangeHeader Header "Range" từ request
 * @returns {{start: number, end: number} | null} Nếu hợp lệ, trả về start và end
 *
 */
export const parseRangeHeader = (videoSize, range) => {
  // parse range header, ví dụ: "bytes=0-999999"
  const ranges = rangeParser(videoSize, range);
  if (ranges === -1 || ranges === -2) {
    // -1 = range ngoài kích thước file, -2 = header range sai cú pháp
    return null;
  }
  const { start, end } = ranges[0]; // lấy range đầu tiên

  return { start, end };
};
