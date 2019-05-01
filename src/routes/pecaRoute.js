'use strict';
const express = require('express');
const router = express.Router();
const pecaController = require('../controller/peca/pecaController');

router.get('/:id', pecaController.get);
router.get('/', pecaController.getAll);
router.post('/', pecaController.post);
router.put('/', pecaController.put);
router.delete('/', pecaController.delete);

module.exports = router;