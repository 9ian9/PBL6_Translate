const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');

// Route để lấy vocabularies theo topicId
router.get('/vocabularies', flashcardController.getVocabularyByTopicId);
router.get('/vocabulary', flashcardController.getVocabularyPage);
// Route để thêm từ vựng
router.post('/vocabulary/add', flashcardController.addVocabulary);

// Route để sửa từ vựng
router.put('/vocabulary/edit/:id', flashcardController.editVocabulary);

// Route để xóa từ vựng
router.delete('/vocabulary/delete/:id', flashcardController.deleteVocabulary);

module.exports = router;