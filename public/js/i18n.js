import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json'; // Import file JSON
import vi from './locales/vi.json';

i18next
    .use(LanguageDetector) // Tự động phát hiện ngôn ngữ trình duyệt
    .init({
        resources: {
            en: { translation: en }, // Tải nội dung từ en.json
            vi: { translation: vi }, // Tải nội dung từ vi.json
        },
        fallbackLng: 'en', // Sử dụng tiếng Anh nếu không tìm thấy ngôn ngữ
        debug: false,
        interpolation: {
            escapeValue: false, // Không escape, bảo vệ XSS
        },
    });

export default i18next;