const supabase = require('../database/db');

const getAllPaints = async () => {
  try {
  const data = await supabase.from('paints').select('*')
  return data  
  } catch (error) {
    console.error('Error loading paints')
  }
};
/*
const createPaint = async (name, description, category, price, image) => {
  const query = 'INSERT INTO paints (nombre, descripcion, categoria, precio, imagen) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [name, description, category, price, image];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const updatePaint = async (id, name, description, category, price, image) => {
  const query = `
  UPDATE paints
  SET nombre = $1, descripcion = $2, categoria = $3, precio = $4, imagen = $5
  WHERE id = $6
  RETURNING *`;
  const values = [name, description, category, price, image, id];
  const { rows } = await pool.query(query,values);
  return rows[0];
}
*/
const getPaintById = async (id) => {
  const query = 'SELECT * FROM paints WHERE id = $1'
  const {rows} = await pool.query(query, [id]);
  return rows[0];
}

module.exports = { getAllPaints, getPaintById};