require('dotenv').config()
const express = require('express')
const app = express()
const URI = process.env.MYSQL_ADDON_URI;
const PORT = process.env.PORT || 4000;

const userRoutes = require('./routes/users');

app.use('/users', userRoutes);

//db connction here

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});