const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const connectDB = require("./src/config/db")
const taiXiuRoutes = require('./src/router/taixiu');
const taiXiuSocket = require('./src/sockets/taiXiuSocket');
const { initSocket } = require('./src/config/socket')
require('./src/CronJob/taiXiuJob'); 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
// Kết nối DB
connectDB();
// Khởi tạo server

const server = http.createServer(app);
const io = initSocket(server);
app.use('/api/taixiu', taiXiuRoutes);

// Khởi động WebSocket
taiXiuSocket(io);

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { io,app };
