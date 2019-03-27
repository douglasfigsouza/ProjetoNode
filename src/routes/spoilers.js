'use strict';
const express = require('express');
const router = express.Router();
const spolierController = require('../controller/spoiler');

router.get('/spolier', spolierController.get);
router.post('/', spolierController.post);
router.put('/:id', spolierController.put);
router.delete('/', spolierController.delete);

module.exports = router;