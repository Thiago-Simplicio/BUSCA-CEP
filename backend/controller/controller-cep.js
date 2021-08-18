const DataCep = require('../models/CepSchema')

module.exports = {
    async index(req,res){
        let cep = await DataCep.find()
        return res.json(cep)
    },

    async create(req,res){
        const {cep,endereco,bairro,cidade,uf} = req.body

        var data = {}

        var CEP = await DataCep.findOne({cep})
        if(!CEP){
            data = {cep,endereco,bairro,cidade,uf}
            CEP = await DataCep.create(data)
            return res.status(200).json(CEP)
        }else{
            return res.status(400).json("CEP já cadsatrado")
        }
    }
}