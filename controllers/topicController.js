const Topic = require('../models/Topic'); // Mô hình Topic
const User = require('../models/User');
exports.getFlashcardPage = async(req, res) => {
    const { userId } = req.params; // Lấy topicId từ tham số URL
    console.log(`Received userId: ${userId}`); // In ra topicId để kiểm tra
    // const userId = req.query.userId; // Lấy userId từ query parameters

    try {
        const topics = await Topic.findAll({ where: { user_id: userId } });
        res.render('listTopic', { topics });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};