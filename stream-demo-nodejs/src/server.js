import express from "express";
import cors from "cors";
import streamRoutes from "./routes/streamRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use(cors());

app.use("/api", streamRoutes);
// Route test
app.get("/", (req, res) => {
  res.send("Hello Node.js ES6 + Express 🚀");
});
app.use(cors);
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
