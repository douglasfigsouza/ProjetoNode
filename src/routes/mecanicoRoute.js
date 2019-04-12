'use strict';
const express = require('express');
const router = express.Router();
const mecanicoController = require('../controller/mecanico/mecanicoController');

router.get('/:id', mecanicoController.get);
router.get('/', mecanicoController.getAll);
router.post('/', mecanicoController.post);
router.put('/', mecanicoController.put);
router.delete('/', mecanicoController.delete);

module.exports = router;