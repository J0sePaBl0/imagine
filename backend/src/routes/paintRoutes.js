const express = require('express');
const router = express.Router();
const { getAllPaints, createPaint } = require('../models/Paint');


router.get('/', async (req, res) => {
  try {
    const paints = await getAllPaints();
    res.json(paints);
  } catch (error) {
    res.status(500).send('Error al obtener pinturas');
  }
});

// POST /api/products
router.post('/', async (req, res) => {
  const { nombre, descripcion, categoria, precio, imagen } = req.body;
  try {
    const newPaint = await createPaint(nombre, descripcion, categoria, precio, imagen);
    res.status(201).json(newPaint);
    console.log("Si entra")
  } catch (error) {
    res.status(500).send('Error al crear producto');
  }
});

module.exports = router;