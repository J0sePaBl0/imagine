require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic CORS
// Replace the basic CORS with this:
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL, // Your Vercel frontend URL
    'http://localhost:5173'   // Local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

app.get('/api/test/:name', (req, res) => {
  res.json({ working: true, name: req.params.name });
});

try {
  const paintRoutes = require('./src/routes/paintRoutes');
  const userRoutes = require('./src/routes/userRoutes');
  app.use('/api/paints', paintRoutes);
  app.use('/api/users', userRoutes);
} catch (err) {
  console.error('ROUTE LOADING ERROR:', err);
  process.exit(1);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});