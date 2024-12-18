const Topic = require('../models/Topic'); // Mô hình Topic
const Vocabulary = require('../models/Vocabulary'); // Mô hình Topic
const User = require('../models/User');
exports.getFlashcardPage = async(req, res) => {
    const userId = req.session.user.id; // Lấy userId từ session
    console.log(`Received userId from topicController: ${userId}`);
    if (!userId) {
        return res.status(400).send('User ID is required'); // Trả về lỗi nếu không có userId
    }

    try {
        const topics = await Topic.findAll({ where: { user_id: userId } });
        req.session.topics = topics;
        res.render('listTopic', { title: 'Flashcard', topics, userId });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
exports.setSelectedTopic = (req, res) => {
    const { topicId } = req.body; // Lấy topicId từ request
    console.log(`Received topicId: ${topicId}`); // In ra topicId để kiểm tra
    if (!topicId) {
        return res.status(400).send('Topic ID is required'); // Kiểm tra nếu topicId không tồn tại
    }

    req.session.selectedTopicId = topicId; // Lưu topicId vào session
    res.status(200).send('Topic selected');
};