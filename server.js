const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const passportConfig = require('./passportConfig'); 
const { sessionSecret } = require('./config');
const sequelize = require('./database');

const app = express();

passportConfig(passport);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так на сервере!');
});

sequelize.authenticate()
  .then(() => {
    console.log('Успешное подключение к базе данных MySQL');
  })
  .catch(err => {
    console.error('Ошибка подключения к базе данных MySQL:', err);
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
