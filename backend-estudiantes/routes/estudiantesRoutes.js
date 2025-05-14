const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const auth = require('../middlewares/authMiddleware');
const { check } = require('express-validator');

router.get('/', auth, estudiantesController.listar);

router.post(
  '/',
  auth,
  [
    check('nombre').trim().escape(),
    check('carrera').trim().escape(),
    check('edad').isNumeric().withMessage('La edad debe ser un número')
  ],
  estudiantesController.crear
);

module.exports = router;