const express = require('express');
const dotenv = require('dotenv');

//load env file
dotenv.config({ path: './config/config.env' });

//intialize app with express
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
