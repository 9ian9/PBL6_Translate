const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const favicon = require('serve-favicon');s
const http = require('http');
const socketIO = require('socket.io');
const stream = require('./ws/stream');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình đường dẫn tĩnh
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Cấu hình favicon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Định nghĩa các route
app.use('/auth', authRoutes);
app.use('/video', videoRoutes);

// Route cho trang chủ để render video.ejs
app.get('/', (req, res) => {
    res.render('video', { title: 'Video Call' });
});

// Cấu hình WebSocket
io.of('/stream').on('connection', stream);

// Khởi động server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});