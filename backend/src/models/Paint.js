const pool = require('../database/db');

const getAllPaints = async () => {
  const query = 'SELECT * FROM products';
  const { rows } = await pool.query(query);
  return rows;
};

const createPaint = async (name, description, category, price, image) => {
  const query = 'INSERT INTO paints (nombre, descripcion, categoria, precio, imagen) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [name, description, category, price, image];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = { getAllPaints, createPaint };