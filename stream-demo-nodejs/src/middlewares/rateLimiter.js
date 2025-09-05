// middlewares/rateLimiter.js
import rateLimit from "express-rate-limit";
import { rateLimitConfig } from "../config/rateLimitConfig.js";

export const videosLimiter = rateLimit(rateLimitConfig);
