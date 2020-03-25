const Usuario = require('../models/Usuario')
let indexController = {
    viewHome: (req, res)=>{
        res.send(' seja bem vindo')
    }
    viewUsuario: (req, res) =>{
        ler userName = Usuario.nome
        res.send(' ola' + userName)
    }
}
module.exports = indexController