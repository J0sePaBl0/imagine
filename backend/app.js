require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paintRoutes = require('./src/routes/paintRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(cors());
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