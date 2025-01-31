const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/profile', profileController.getProfilePage);
router.post('/profile/changePassword',profileController.changePassword);

module.exports = router;