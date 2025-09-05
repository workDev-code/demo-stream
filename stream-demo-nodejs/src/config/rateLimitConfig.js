// config/rateLimitConfig.js

export const rateLimitConfig = {
  windowMs: 10 * 1000, // 10 giây
  max: 5, // tối đa 5 request / 10s / IP
  message: { error: "Too many requests, please try again later." },
};
