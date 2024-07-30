const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const { sessionSecret } = require('./config');
const sequelize = require('./database');
const { Ad, syncModel } = require('./models/Ad');

const app = express();

const multer = require('multer');


const upload = multer({ limits: { fileSize: 10 * 1024 * 1024 } }); 


app.post('/upload', upload.single('file'), (req, res) => {
  
  res.send('Файл загружен успешно!');
});

app.use(cors());


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


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

  app.post('/api/ads', async (req, res) => {
    try {
      const adData = req.body;
      const newAd = await Ad.create(adData);
      res.status(201).json(newAd);
    } catch (err) {
      console.error('Ошибка при публикации объявления:', err);
      res.status(500).send('Ошибка при публикации объявления');
    }
  });

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

syncModel();