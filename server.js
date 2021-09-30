const express = require('express');
const dotenv = require('dotenv');
// this is custom logger check in middleware
// const logger = require('./middleware/logger');

//Usign morgan 3rd party logger
const morgan = require('morgan');

//Routes files
const books = require('./routes/books');

//load env file
dotenv.config({ path: './config/config.env' });

//intialize app with express
const app = express();

//dev using Middleware logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mounts routers
app.use('/api/v1/books', books);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
