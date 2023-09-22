require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const userRoutes = require('./routes/users');
const orgRoutes = require('./routes/orgRoutes');
const lunchRoutes = require('./routes/lunchRoutes');
const authRoutes = require('./routes/auth.route');
const sequelize = require('./db/db');

const app = express();

// Configurations
app.use(express.json());
app.use(helmet());
const PORT = process.env.PORT || 4000;

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/organization', orgRoutes);
app.use('/api/lunch', lunchRoutes);

// Middlewares
app.use(errorHandlerMiddleware);
app.use(notFound);

sequelize.sync().then(() => {
  // Remove console.log() before production
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
