const Estudiante = require('../models/Estudiante');

exports.listar = async (req, res) => {
  try {
    const lista = await Estudiante.find();
    res.json(lista);
  } catch (error) {
    res.status(500).send('Error al listar estudiantes');
  }
};

exports.crear = async (req, res) => {
  try {
    const estudiante = new Estudiante(req.body);
    await estudiante.save();
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(500).send('Error al crear estudiante');
  }
};