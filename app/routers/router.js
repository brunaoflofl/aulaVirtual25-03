const express = require('express')
const indexController = require('../controllers/indexController')
const Usuario = require('../models/Usuario')
let router = express.Router()

router.get(' /', indexController.viewHome)
router.get('/usuarios', Usuario.viewUsuario)
module.exports = router