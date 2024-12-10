const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');

// Route để lấy vocabularies theo topicId
router.get('/vocabularies', flashcardController.getVocabularyByTopicId);

module.exports = router;