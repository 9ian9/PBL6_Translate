const Vocabulary = require('../models/Vocabulary'); // Mô hình Vocabulary
const Topic = require('../models/Topic'); // Mô hình Topic

exports.getVocabularyByTopicId = async(req, res) => {
    const { topicId } = req.query; // Lấy topicId từ query string
    const { userId } = req.query; // Lấy userId từ query string
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
        // Truyền dữ liệu vào view vocabulary.ejs
        // if (req.path === '/vocabulary') {
        //     // Nếu yêu cầu là hiển thị trang vocabulary.ejs
        //     return res.render('vocabulary', {
        //         title: 'Vocabulary List', // Tiêu đề trang
        //         vocabularies, // Truyền danh sách từ vựng vào view
        //         userId, // Truyền userId vào view
        //         topicId, // Truyền topicId vào view
        //         topicTitle // Truyền topicTitle vào view
        //     });
        // } else if (req.path === '/flashcardDetail') {
        //     // Nếu yêu cầu là hiển thị trang flashcardDetail.ejs
        //     return res.render('flashcardDetail', {
        //         title: 'Flashcard Detail',
        //         vocabularies, // Truyền danh sách từ vựng vào view
        //         userId, // Truyền userId vào view
        //         topicId, // Truyền topicId vào view
        //         topicTitle // Truyền topicTitle vào view
        //     });
        // }
    } catch (error) {
        console.log('Error fetching vocabularies:', error); // In ra lỗi nếu có
        res.status(500).send('Server error');
    }
};


// const Vocabulary = require('../models/Vocabulary'); // Mô hình Vocabulary
// const Topic = require('../models/Topic'); // Mô hình Topic

// exports.getVocabularyByTopicId = async(req, res) => {
//     const { topicId } = req.params; // Lấy topicId từ tham số URL
//     const userId = req.query.userId; // Lấy userId từ query string
//     console.log(`Received userId here: ${userId}`); // In ra topicId để kiểm tra
//     console.log(`Received topicId: ${topicId}`); // In ra topicId để kiểm tra

//     try {
//         // Tìm vocabularies có title_id trùng với topicId
//         const vocabularies = await Vocabulary.findAll({ where: { title_id: topicId } });

//         console.log(`Found vocabularies: ${JSON.stringify(vocabularies)}`); // In ra vocabularies

//         if (vocabularies.length === 0) {
//             console.log('No vocabularies found for this topicId.');
//         }

//         res.render('flashcardDetail', { title: 'Vocabularies', vocabularies });
//     } catch (error) {
//         console.log('Error fetching vocabularies:', error); // In ra lỗi nếu có
//         res.status(500).send('Server error');
//     }
// };