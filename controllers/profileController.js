const User = require('../models/User');

exports.getProfilePage = async(req, res) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Nếu chưa đăng nhập, chuyển hướng đến trang login
    }

    const { username } = req.session.user;

    try{
        const user = await User.findOne({ where: {username} });
        res.render('profile', { 
            title: 'Profile',
            user: {
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            }
        });
    }catch (error) {
        console.log(error); // In ra lỗi để kiểm tra
        res.status(500).send('Server error');
    }

    
};

exports.updateProfile = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Kiểm tra session
    }

    const { first_name, last_name } = req.body; // Lấy dữ liệu từ form
    const username = req.session.user.username; // Lấy username từ session

    try {
        // Cập nhật thông tin trong cơ sở dữ liệu
        await User.update(
            { first_name, last_name }, // Thông tin cần cập nhật
            { where: { username } } // Điều kiện cập nhật
        );

        // Cập nhật thành công, điều hướng lại trang profile
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.changePassword = async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Chuyển hướng nếu người dùng chưa đăng nhập
    }

    const { currentPass, newPass, confirmPass } = req.body; // Dữ liệu từ form
    const username = req.session.user.username; // Lấy username từ session

    // Kiểm tra mật khẩu mới có khớp với xác nhận không
    if (newPass !== confirmPass) {
        req.session.errorMessage = 'Mật khẩu mới và xác nhận mật khẩu không khớp!';
        return res.redirect('/profile');
    }

    try {
        
        const user = await User.findOne({ where: { username } });
        if (currentPass === user.password) {
            await User.update(
            { password: newPass },
            { where: { username } }
            );       
        res.redirect('/profile');       
        }
        
        
    } catch (error) {
        console.error(error);
        req.session.errorMessage = 'Đã xảy ra lỗi khi thay đổi mật khẩu!';
        res.redirect('/profile');
    }
};