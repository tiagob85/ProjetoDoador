//configurando o servidor
const express = require('express')
const server = express()

//configurar o servidor para apresentar arquivos extras.
server.use(express.static('public'))

//configurando a template engine
const nunjuncks = require("nunjucks")
nunjuncks.configure("./",{
    express: server
})

//configurar a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html");
})

//ligar o servidor e permitir o acesso pela porta 3000
server.listen(3000, function(){
    console.log("Servidor iniciado")
})