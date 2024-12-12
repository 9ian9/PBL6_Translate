const express = require('express');
const router = express.Router();

// Route API để khởi tạo video call
router.post('/start', (req, res) => {
  // Logic khởi tạo phiên call
  res.status(200).json({ message: 'Video call started' });
});

router.post('/end', (req, res) => {
  // Logic kết thúc phiên call
  res.status(200).json({ message: 'Video call ended' });
});

module.exports = router;
