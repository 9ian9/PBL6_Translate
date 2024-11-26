const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/call', videoController.getCallPage);
router.post('/start-call', videoController.startCall);

module.exports = router;