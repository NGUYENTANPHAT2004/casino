// sockets/chatSocket.js
const ChatService = require('../services/chatservice');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Gửi lịch sử chat khi người dùng kết nối
    socket.on('requestChatHistory', async () => {
      try {
        const chatHistory = await ChatService.getChatHistory();
        socket.emit('chatHistory', chatHistory.reverse()); // Đảo ngược để hiển thị từ cũ đến mới
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    });

    // Xử lý tin nhắn mới
    socket.on('sendMessage', async ({ userId, message }) => {
      try {
        // Lưu tin nhắn vào database
        const savedMessage = await ChatService.saveMessage(userId,message);

        // Phát tin nhắn đến tất cả người dùng
        io.emit('newMessage', savedMessage);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    // Ngắt kết nối
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};