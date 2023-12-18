const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://julien-remmery-vinci.github.io'],
};

const app = express();

const authsRouter = require('./routes/auths');
const tripsRouter = require('./routes/trips');
const placesRouter = require('./routes/places');
const commentsRouter = require('./routes/comments');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auths', cors(corsOptions), authsRouter);
app.use('/trips', cors(corsOptions), tripsRouter);
app.use('/places', cors(corsOptions), placesRouter);
app.use('/comments', cors(corsOptions), commentsRouter);

app.use(cors(corsOptions));

module.exports = app;
