const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/flashcard', topicController.getFlashcardPage);
module.exports = router;