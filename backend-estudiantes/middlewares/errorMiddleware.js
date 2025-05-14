module.exports = (err, req, res, next) => {
    console.error(err.stack); // Imprime el error en la consola para depuración
    res.status(500).json({ error: 'Ocurrió un error inesperado en el servidor' });
  };