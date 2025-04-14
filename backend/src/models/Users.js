const pool = require('../database/db')

getAllUsers = async () =>{
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows
}

createUser = async (name, password, address) =>{
    const query = 'INSERT INTO users (name, password, address) VALUES ($1, $2, $3)';
    const values = [name, password, address]
    const { rows } = await pool.query(query,values);
    return rows
}