const bcrypt = require('bcrypt');
const User = require('../models/User');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email и пароль обязательны' });
    }

    const user = await User.findOne({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ success: true, message: 'Вход выполнен успешно' });
    } else {
      res.status(401).json({ success: false, message: 'Неверный email или пароль' });
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

module.exports = { loginUser };
