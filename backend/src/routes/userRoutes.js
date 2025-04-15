const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser } = require('../models/Users');

router.get('/', async (req,res)=>{
    try{
        const users = await getAllUsers();
        res.json(users);
    }catch (error){
        res.status(500).send('error al obtener usuarios')
    }
});

router.post('/', async (req,res)=>{
    const { name, password, address } = req.body
    try {
        const newUser = await createUser(name, password, address);
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send('error al crear usuario')
    }
});

router.post('/updateUser', async (req,res)=>{
    const { id, name, password, address } = req.body;
    try{
      const editUser = await updateUser(id,name,password,address)
      res.status(201).json(editUser)
    }catch(error){
        res.status(500).send('error al actualizar usuario')
    }
  });

module.exports = router;