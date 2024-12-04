const Flashcard = require('../models/Flashcard');

// flashcardController.js

// Flashcards mẫu (sử dụng tạm thời cho demo)
const flashcards = [
    { id: 1, word: 'Apple', meaning: 'A fruit that is usually red, green, or yellow.', example: 'I ate an apple for breakfast.' },
    { id: 2, word: 'Book', meaning: 'A set of written, printed, or blank pages fastened together and bound in covers.', example: 'She is reading a book.' },
    { id: 3, word: 'Car', meaning: 'A vehicle with four wheels that is powered by an engine and can carry a small number of people.', example: 'He drove his car to work.' },
    // Thêm nhiều flashcards ở đây nếu cần
  ];
  
  // Lấy tất cả flashcards
  exports.getAllFlashcards = (req, res) => {
    res.render('flashcard', { flashcards });
  };
  
  // Lấy flashcard theo id
  exports.getFlashcardById = (req, res) => {
    const flashcard = flashcards.find(flashcard => flashcard.id === parseInt(req.params.id));
    if (flashcard) {
      res.render('flashcardDetail', { flashcard });
    } else {
      res.status(404).send('Flashcard not found');
    }
  };
  