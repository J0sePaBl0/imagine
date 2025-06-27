require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paintRoutes = require('./routes/paintRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/paints', paintRoutes);
app.use('/api/users', userRoutes);

// Start server locally OR export for Vercel
if (require.main === module) {
  // Running locally
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
} else {
  // Export for Vercel
  module.exports = app;
}