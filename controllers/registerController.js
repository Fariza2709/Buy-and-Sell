const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Все поля обязательны' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Пользователь с таким email уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ success: true, message: 'Пользователь успешно зарегистрирован', user: newUser });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};


module.exports = { registerUser };
