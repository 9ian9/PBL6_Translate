const Topic = require('../models/Topic'); // Mô hình Topic
exports.getFlashcardPage = async(req, res) => {
    const userId = req.query.userId; // Lấy userId từ query parameters

    try {
        const topics = await Topic.findAll({ where: { user_id: userId } });
        res.render('flashcardTopic', { topics });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};