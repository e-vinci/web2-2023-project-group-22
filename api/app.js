const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://julien-remmery-vinci.github.io'],
};

const app = express();

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const tripsRouter = require('./routes/trips');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', cors(corsOptions), usersRouter);
app.use('/auths', cors(corsOptions), authsRouter);
app.use('/trips', cors(corsOptions), tripsRouter);

app.use(cors(corsOptions));

module.exports = app;
