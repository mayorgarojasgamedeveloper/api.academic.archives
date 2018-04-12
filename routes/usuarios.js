var express = require('express');
var router = express.Router();

// GET Perfil
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET Editar Perfil
router.get('/editar', function(req, res, next) {
  res.send('respond with a resource');
});

// GET Gestion de Reportes
router.get('/carpeta', function(req, res, next) {
  res.send('respond with a resource');
});

/// Solo administradores

// GET Crear Superusuarios || Usuarios
router.get('/crear/:tipo', function(req, res, next) {
  switch(req.params.tipo) {
    case 'superusuario':
      res.send('Crear superusuario');
      break;
    case 'academico':
      res.send('Crear academico');
      break;
    default:
      res.status(404).send('Error 404');
      break;
  }
});

module.exports = router;
