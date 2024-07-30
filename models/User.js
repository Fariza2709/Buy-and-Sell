const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      isStrongPassword(value) {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(value)) {
          throw new Error('Пароль должен содержать как минимум одну заглавную букву, одну цифру и один специальный символ.');
        }
      }
    }
  }
}, {
  tableName: 'users',
  timestamps: true, 
  createdAt: 'created_at',
  updatedAt: false
});
  

module.exports = User;
