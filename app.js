const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const PORT = process.env.port || 4343;
const cors = require('cors');

const corsOptions = {
  origin: ['https://ihawp.com', 'https://www.ihawp.com', 'http://localhost:3001', 'http://localhost:3000'],
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');
const bcitRouter = require('./routes/bcit');
const apiRouter = require('./routes/api');
const gracieRouter = require('./routes/gracie');
const fathersDayRouter = require('./routes/fathers-day');

const app = express();

app.use(cors(corsOptions));

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/gracie', gracieRouter);
app.use('/fathers-day', fathersDayRouter);
app.use('/api', apiRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/blog', blogRouter);
app.use('/bcit', bcitRouter);

app.listen(PORT, (req, res) => {
  console.log(`App Listening on port ${PORT}`);
});
