const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false // Obligatorio para Railway
    }
});

// Verificar la conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('Error al conectar a PostgreSQL:', err);
  else console.log('PostgreSQL conectado en:', res.rows[0].now);
});

module.exports = pool;