// services/chatService.js
const Chat = require('../model/chatmodel');

// Lưu tin nhắn vào database
const saveMessage = async (userId, content) => {
  const newMessage = new Chat({ userId,  content });
  await newMessage.save();
  return newMessage;
};

// Lấy lịch sử chat (50 tin nhắn gần nhất)
const getChatHistory = async () => {
  return await Chat.find().sort({ timestamp: -1 }).limit(50);
};

module.exports = { saveMessage, getChatHistory };