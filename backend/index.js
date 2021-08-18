const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost/BUSCACEP',{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function(){
    console.log("Conectado ao MongoDB")
}).catch(function(error){
    console.log("Erro ao conectar ao MongoDB " + error)
})

const route = require('./route/route')
app.use('/', route)

const port = 9091;
app.listen(port, function(){
    console.log("Servidor rodando na porta http://localhost:9091")
})
