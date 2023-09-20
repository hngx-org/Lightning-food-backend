require('dotenv').config();
const express = require('express');
const errorHandlerMiddleware = require("./middlewares/error-handler")

const app = express();

const URI = process.env.MYSQL_ADDON_URI;


app.use(errorHandlerMiddleware);

app.listen();
