const sequelize = require('./database');
const bcrypt = require('bcryptjs');

const rehashPasswords = async () => {
  try {
    const [results] = await sequelize.query('SELECT * FROM users');
    
    const updatePromises = results.map(async (user) => {
      try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await sequelize.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, user.id]);
      } catch (err) {
        console.error(`Ошибка при обновлении пароля для пользователя с id ${user.id}:`, err);
      }
    });

    await Promise.all(updatePromises);
    console.log('Пароли перехешированы');
  } catch (err) {
    console.error('Ошибка при извлечении пользователей или перехешировании паролей:', err);
  } finally {
    process.exit();
  }
};

rehashPasswords();
