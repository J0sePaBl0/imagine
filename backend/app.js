require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = [
  process.env.FRONTEND_URL,
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json()); // ← importante si estás usando POST con JSON

// Rutas
try {
  const paintRoutes = require('./src/routes/paintRoutes');
  const userRoutes = require('./src/routes/userRoutes');
  app.use('/api/paints', paintRoutes);
  app.use('/api/users', userRoutes);
} catch (err) {
  console.error('ROUTE LOADING ERROR:', err);
  process.exit(1);
}

// Error handler para CORS
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'CORS error: Origin not allowed' });
  }
  next(err);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
