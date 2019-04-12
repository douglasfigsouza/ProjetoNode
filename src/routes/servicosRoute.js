'use strict';
const express = require('express');
const router = express.Router();
const servicoController = require('../controller/servico/servicoController');

router.get('/:id', servicoController.get);
router.post('/', servicoController.post);

module.exports = router;