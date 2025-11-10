require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paintRoutes = require('./src/routes/paintRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// --- CORS allow-list ---
const allowedOrigins = [
  process.env.PUBLIC_WEB_ORIGIN,           // e.g. https://imagine-i13q.vercel.app
  'http://localhost:5173'
];

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true); // server-to-server / curl
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
};

// Apply CORS headers to everything
app.use(cors(corsOptions));

// Robust manual preflight handler (no wildcard path needed)
app.use((req, res, next) => {
  // echo back allowed origin (and make cacheable per-origin)
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Vary', 'Origin');
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') return res.sendStatus(204); // end preflight cleanly
  next();
});

app.use(express.json());

// Routes
app.use('/api/paints', paintRoutes);
app.use('/api/users', userRoutes);

// Export / listen
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}
