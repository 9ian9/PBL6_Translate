const Vocabulary = require('../models/Vocabulary'); // Mô hình Vocabulary
const Topic = require('../models/Topic'); // Mô hình Topic

exports.getVocabularyByTopicId = async(req, res) => {
    const { topicId } = req.query;
    const userId = req.session.user.id;
    console.log(`Received userId here: ${userId}`); // In ra userId để kiểm tra
    console.log(`Received topicId: ${topicId}`); // In ra topicId để kiểm tra

    try {
        // Tìm vocabularies có title_id trùng với topicId
        const vocabularies = await Vocabulary.findAll({ where: { title_id: topicId } });

        console.log(`Found vocabularies: ${JSON.stringify(vocabularies)}`); // In ra vocabularies

        if (vocabularies.length === 0) {
            console.log('No vocabularies found for this topicId.');
        }

        // Lấy title của topic từ bảng Topic
        const topic = await Topic.findByPk(topicId); // Tìm topic bằng primary key (topicId)
        const topicTitle = topic ? topic.title : 'Unknown'; // Nếu tìm được topic, lấy title, nếu không thì trả về 'Unknown'
        console.log(`topic title neeee: ${topicTitle}`);

        // Truyền userId vào cùng với các dữ liệu khác khi render view
        res.render('flashcardDetail', {
            title: 'Vocabularies',
            vocabularies,
            userId,
            topicId,
            topicTitle // Truyền userId vào view
        });
    } catch (error) {
        console.log('Error fetching vocabularies:', error); // In ra lỗi nếu có
        res.status(500).send('Server error');
    }
};
exports.getVocabularyPage = async(req, res) => {
    const userId = req.session.user.id;
    console.log(`Received userId from topicController: ${userId}`);

    if (!userId) {
        return res.status(400).send('User ID is required'); // Trả về lỗi nếu không có userId
    }

    try {
        // Lấy tất cả các topic của người dùng
        const topics = await Topic.findAll({ where: { user_id: userId } });

        // Tạo một mảng để chứa vocabularies cho từng topic
        const topicsWithVocabularies = await Promise.all(topics.map(async(topic) => {
            const vocabularies = await Vocabulary.findAll({ where: { title_id: topic.id } });
            return {
                ...topic.toJSON(), // Chuyển đổi topic thành object
                vocabularies // Thêm vocabularies vào topic
            };
        }));

        // Render view với cả topics và vocabularies
        res.render('vocabulary', {
            title: 'Flashcard',
            topics: topicsWithVocabularies, // Truyền topics đã có vocabularies
            userId
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
exports.addVocabulary = async(req, res) => {
    const { englishWord, vietnameseMeaning, topicId, newTopic } = req.body;

    try {
        let topicIdToUse = topicId;

        // Nếu có tên topic mới, thêm vào DB
        if (newTopic) {
            const topic = await Topic.create({ title: newTopic, user_id: req.body.userId });
            topicIdToUse = topic.id;
        }

        // Thêm từ vựng mới
        const newVocabulary = await Vocabulary.create({
            english_word: englishWord,
            vietnamese_meaning: vietnameseMeaning,
            title_id: topicIdToUse
        });

        res.status(201).json(newVocabulary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.editVocabulary = async(req, res) => {
    const { id } = req.params;
    const { englishWord, vietnameseMeaning } = req.body;

    try {
        const vocabulary = await Vocabulary.findByPk(id);
        if (!vocabulary) {
            return res.status(404).send('Vocabulary not found');
        }

        vocabulary.english_word = englishWord;
        vocabulary.vietnamese_meaning = vietnameseMeaning;
        await vocabulary.save();

        res.json(vocabulary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.deleteVocabulary = async(req, res) => {
    const { id } = req.params;

    try {
        const vocabulary = await Vocabulary.findByPk(id);
        if (!vocabulary) {
            return res.status(404).send('Vocabulary not found');
        }

        await vocabulary.destroy();
        res.status(204).send(); // Trả về 204 No Content
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};