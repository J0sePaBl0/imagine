require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paintRoutes = require('./routes/paintRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api/paints', paintRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});