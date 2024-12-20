const Chat = require('../models/Chat');
const User = require('../models/User');
const { Op } = require('sequelize');

exports.sendMessage = async(req, res) => {
    try {
        const { sender_id, receiver_id, message } = req.body;
        const newMessage = await Chat.create({ sender_id, receiver_id, message });
        res.status(201).json(newMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
exports.getMessages = async(req, res) => {
    const { sender_id, receiver_id } = req.params;

    if (!sender_id || !receiver_id) {
        return res.status(400).json({ error: 'Sender ID and Receiver ID are required' });
    }

    try {
        const messages = await Chat.findAll({
            where: {
                [Op.or]: [
                    { sender_id: parseInt(sender_id), receiver_id: parseInt(receiver_id) },
                    { sender_id: parseInt(receiver_id), receiver_id: parseInt(sender_id) }
                ]
            },
            order: [
                ['timestamp', 'ASC']
            ]
        });
        res.status(200).json({ messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
};

exports.getChatPage = async(req, res) => {
    const userId = req.session.user.id; // Lấy userId từ query string
    console.log(`Received userId from chatController: ${userId}`);
    if (!userId) {
        return res.status(400).send('User ID is required'); // Trả về lỗi nếu không có userId
    }

    try {
        const users = await User.findAll(); // Lấy danh sách người dùng (bạn bè)
        // Lọc ra người dùng hiện tại
        const filteredUsers = users.filter(user => user.id !== parseInt(userId));

        res.render('message', { title: 'Chat', users: filteredUsers, userId });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};