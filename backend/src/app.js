const express = require('express');
const cors = require('cors');
const paintRoutes = require('./routes/paintRoutes');
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api/paints', paintRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});