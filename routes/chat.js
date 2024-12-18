const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Route để render video.ejs
router.get('/video', chatController.getChatPage);

// Các route khác của chat
router.post('/chat/send', chatController.sendMessage);
router.get('/chat/messages/:sender_id/:receiver_id', chatController.getMessages);

module.exports = router;