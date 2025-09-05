// middleware/checkRangeHeader.js
import { errorResponse } from "../response/response.js";

export const checkRangeHeader = (req, res, next) => {
  const range = req.headers.range;

  if (!range) {
    return errorResponse(res, { message: "Requires Range header" }, 416);
  }

  req.range = range; // lưu range vào request để controller dùng
  next();
};
