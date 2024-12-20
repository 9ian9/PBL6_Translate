const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/pbl6', {
    dialect: 'mysql',
    logging: console.log
});

const Vocabulary = sequelize.define('Vocabulary', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    },
    title_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'topics', // Tên bảng chứa topic
            key: 'id'
        }
    }
}, {
    tableName: 'vocabularies', // Chỉ định tên bảng
    timestamps: false
});

module.exports = Vocabulary;