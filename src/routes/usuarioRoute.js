'use strict';
const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario/usuarioController');

router.get('/:id', usuarioController.get);
router.get('/', usuarioController.getAll);
router.post('/', usuarioController.post);
router.put('/', usuarioController.put);
router.delete('/', usuarioController.delete);

module.exports = router;