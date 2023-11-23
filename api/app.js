const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const app = express();

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/auths', authsRouter);

app.use(cors(corsOptions));
require('dotenv').config();

module.exports = app;
