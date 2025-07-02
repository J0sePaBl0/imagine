require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paintRoutes = require('./src/routes/paintRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://imagine-j13q.vercel.app/'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(express.json());

app.use('/api/paints', paintRoutes);
app.use('/api/users', userRoutes);

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}