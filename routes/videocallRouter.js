const express = require('express');
const path = require('path');
const router = express.Router();

// Serve React app
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/react-videocall/index.html'));
});

module.exports = router;
