const pool = require('../database/db')

getAllUsers = async () =>{
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows
}

createUser = async (name, password, address) =>{
    const query = 'INSERT INTO users (name, password, address) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, password, address]
    const { rows } = await pool.query(query,values);
    return rows
}

updateUser = async (id, name, password, address)=>{
    const query =`
            UPDATE users 
            SET name = $1, password = $2, address = $3 
            WHERE id = $4
            RETURNING *`
    const values = [name, password, address, id]
    const {rows} = await pool.query(query,values);
    return rows [0];
}




module.exports = { getAllUsers, createUser, updateUser };