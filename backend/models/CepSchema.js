const mongoose = require('mongoose')

const CepSchema = new mongoose.Schema({
    cep: Number,
    endereco: String,
    bairro: String,
    cidade: String,
    uf: String
},{
    timestamps: true
})

const DataCep = mongoose.model('Cep', CepSchema)
module.exports = DataCep;