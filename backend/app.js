require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic CORS
app.use(cors());
app.use(express.json());

// Test route first
app.get('/api/test/:name', (req, res) => {
  res.json({ working: true, name: req.params.name });
});

// Then try importing your routes
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