const express = require('express');
const router = express.Router();
const { getAllPaints} = require('../models/Paint');


router.get('/getAllPaints', async (req, res) => {
  try {
    const paints = await getAllPaints();
    res.json(paints);
  } catch (error) {
    res.status(500).send('Error al obtener pinturas');
  }
});
/*
router.get('/getById', async (req,res) => {
  try {
    const { id } = req.query;
    const paint = await getPaintById(id);
    if (!paint) {
      return res.status(404).json({ error: 'Pintura no encontrada' });
    }
    res.json(paint);
  } catch (error) {
    res.status(500).send('Error al obtener pintura');
  }
});

router.post('/', async (req, res) => {
  const { nombre, descripcion, categoria, precio, imagen } = req.body;
  try {
    const newPaint = await createPaint(nombre, descripcion, categoria, precio, imagen);
    res.status(201).json(newPaint);
  } catch (error) {
    res.status(500).send('Error al crear pintura');
  }
});

router.post('/updatePaint', async (req,res)=>{
  const { id, nombre, descripcion, categoria, precio, imagen } = req.body;
  try {
    const editedPaint = await updatePaint(id,nombre,descripcion,categoria,precio,imagen);
    res.status(201).json(editedPaint)
  } catch (error) {
    res.status(500).send('Error al actualizar pintura');
  }
});
*/


module.exports = router;