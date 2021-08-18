const express = require('express')
const route = express.Router()

route.use(express.json())

const CEP = require('../controller/controller-cep')

route.get('/todos-cep', CEP.index)
route.post('/salvar-cep', CEP.create)

module.exports = route;