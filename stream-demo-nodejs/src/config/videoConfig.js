// config/videoConfig.js
import path from "path";

const videosDir = path.join(process.cwd(), "videos");
const chunkSize = 10 ** 6; // 1MB = 10^6 byte
export { videosDir, chunkSize };
