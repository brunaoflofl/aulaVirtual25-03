const express = require('express')


const server = express()
const rotas = require('./app/routers/router')

server.use(rotas)
server.listen(3300, ()=>{
    console.log('servidor rodando"')

});