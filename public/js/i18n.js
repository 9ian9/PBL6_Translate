const i18n = require('i18n');
const path = require('path');

i18n.configure({
    locales: ['en', 'vi'], // Các ngôn ngữ hỗ trợ
    directory: path.join(__dirname, '../locales'), // Đường dẫn đến thư mục locales
    defaultLocale: 'en',
    cookie: 'lang', // Cookie để lưu ngôn ngữ
    autoReload: true, // Tự động tải lại khi file JSON thay đổi
    syncFiles: true, // Đồng bộ các file JSON
    queryParameter: 'lang'
});

module.exports = i18n;