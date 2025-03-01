const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");
const socketConfig = require("./config/socket");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Kết nối DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.route"));

// Khởi động Socket.IO
socketConfig(server);
console.log("api endpoint");

// Chạy server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
