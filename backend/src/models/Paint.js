const supabase = require('../database/db');

const pick = (row) => ({
  id: row.id,
  name: row.nombre,
  description: row.descripcion,
  imagen: row.imagen,
  category: row.categoria,
  price: row.precio,
});

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
  // normalize/validate (if ids are integers)
  const n = parseInt(id, 10);
  if (Number.isNaN(n) || n <= 0) {
    const err = new Error('Invalid id');
    err.status = 400;
    throw err;
  }

  const { data, error } = await supabase
    .from('paints')
    .select('id,nombre,descripcion,categoria,precio,imagen') // no parentheses
    .eq('id', n)
    .single(); // returns { data:null, error:{status:406} } when not found

  if (error) {
    if (error.status === 406) return null; // not found
    throw error; // other errors
  }

  return pick(data); // <- pass the row only
};

module.exports = { getAllPaints, getPaintById};