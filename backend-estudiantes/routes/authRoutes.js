const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

router.post(
  '/registro',
  [
    check('correo', 'Correo inválido').isEmail(),
    check('contraseña', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 })
  ],
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  },
  authController.registrar
);

router.post('/login', authController.login);

module.exports = router;