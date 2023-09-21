require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// Parse JSON request bodies
// app.use(bodyParser.json());

// const URI = process.env.MYSQL_ADDON_URI;

const PORT = process.env.PORT || 4000;
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

const userRoutes = require('./routes/users');
const lunchRoutes = require('./routes/lunchRoutes');

app.use('/users', userRoutes);

app.use('/lunch', lunchRoutes);

//db connction here

// Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
