import { Router } from "express";
import * as streamController from "../controller/streamController.js";
import { videosLimiter } from "../middlewares/rateLimiter.js";
import { checkRangeHeader } from "../middlewares/checkRangeHeader.js";

const router = Router();

router.get("/videos", videosLimiter, streamController.getNameFiles);

// Stream 1 file video cụ thể
router.get(
  "/videos/:videoName",
  checkRangeHeader,
  streamController.streamVideo
);

export default router;
