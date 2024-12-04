// routes/flashcardRouter.js

const express = require('express');
const router = express.Router();

// Controller
const flashcardController = require('../controllers/flashcardController');

// Route để hiển thị tất cả flashcards
router.get('/', flashcardController.getAllFlashcards);

// Route để hiển thị một flashcard cụ thể (nếu cần)
router.get('/:id', flashcardController.getFlashcardById);

module.exports = router;
