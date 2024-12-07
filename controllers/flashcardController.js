const Vocabulary = require('../models/Vocabulary'); // Mô hình Vocabulary
const Topic = require('../models/Topic'); // Mô hình Topic

exports.getVocabularyByTopicId = async(req, res) => {
    const { topicId } = req.params; // Lấy topicId từ tham số URL
    console.log(`Received topicId: ${topicId}`); // In ra topicId để kiểm tra

    try {
        // Tìm vocabularies có title_id trùng với topicId
        const vocabularies = await Vocabulary.findAll({ where: { title_id: topicId } });

        console.log(`Found vocabularies: ${JSON.stringify(vocabularies)}`); // In ra vocabularies

        if (vocabularies.length === 0) {
            console.log('No vocabularies found for this topicId.');
        }

        res.render('flashcardDetail', { title: 'Vocabularies', vocabularies });
    } catch (error) {
        console.log('Error fetching vocabularies:', error); // In ra lỗi nếu có
        res.status(500).send('Server error');
    }
};
// flashcardController.js

// Flashcards mẫu (sử dụng tạm thời cho demo)
// const flashcards = [
//     { id: 1, word: 'Apple', meaning: 'A fruit that is usually red, green, or yellow.', example: 'I ate an apple for breakfast.' },
//     { id: 2, word: 'Book', meaning: 'A set of written, printed, or blank pages fastened together and bound in covers.', example: 'She is reading a book.' },
//     { id: 3, word: 'Car', meaning: 'A vehicle with four wheels that is powered by an engine and can carry a small number of people.', example: 'He drove his car to work.' },
//     // Thêm nhiều flashcards ở đây nếu cần
//   ];

//   // Lấy tất cả flashcards
//   exports.getAllFlashcards = (req, res) => {
//     res.render('flashcard', { flashcards });
//   };

// Lấy flashcard theo id
// exports.getFlashcardById = (req, res) => {
//   const flashcard = flashcards.find(flashcard => flashcard.id === parseInt(req.params.id));
//   if (flashcard) {
//     res.render('flashcardDetail', { flashcard });
//   } else {
//     res.status(404).send('Flashcard not found');
//   }
// };