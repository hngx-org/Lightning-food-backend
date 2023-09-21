require('dotenv').config();
const express = require('express');
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const userRoutes = require('./routes/users');
const orgRoutes = require('./routes/orgRoutes');
const lunchRoutes = require('./routes/lunchRoutes');
const sequelize = require('./db/db');
const auth = require('./middlewares/auth');

const app = express();

// Configurations
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api/organization', orgRoutes);
app.use('/api', userRoutes);
app.use('/api', auth, lunchRoutes);

// Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

sequelize.sync().then(() => {
  // Remove console.log() before production
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
