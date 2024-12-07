const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/pbl6', {
    dialect: 'mysql',
    logging: console.log
});

const Vocabulary = sequelize.define('Vocabulary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    english_word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vietnamese_meaning: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'vocabularies', // Chỉ định tên bảng
    timestamps: false
});

module.exports = Vocabulary;