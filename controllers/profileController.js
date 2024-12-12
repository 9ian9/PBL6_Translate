const user = require('../models/User');
exports.getProfilePage = (req, res) =>{
    res.render('profile',{title: 'Profile'});
};