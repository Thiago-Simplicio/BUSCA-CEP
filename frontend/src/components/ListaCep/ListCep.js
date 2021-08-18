import React from 'react'

import {BoxData} from './ListCepStyled'
import api from '../../services/api'

const ListCep = ({events}) => {
    
   

    async function salvarSubmit(e){
        e.preventDefault()

        var cep = document.querySelector('.cep').value
        var endereco = document.querySelector('.endereco').value
        var bairro = document.querySelector('.bairro').value
        var cidade = document.querySelector('.cidade').value
        var uf = document.querySelector('.uf').value

        cep = cep.replace("-","");

        const response = await api.post('/salvar-cep',{
            cep,
            endereco,
            bairro,
            cidade,
            uf
        }).then(function(){
            alert("Salvo com sucesso")
        }).catch(function(error){
            alert("CEP já cadastrado")
        })

    }
    
    if(!events || typeof events === undefined || events.length === 0)return <h1>Informe um cep valido!</h1>

    return(
        <BoxData>
                <h1>CEP ENCONTRADO</h1>
            <form onSubmit={salvarSubmit}>
                <div className="boxField">
                    <label>CEP: </label>
                    <input className="cep" value={events.cep} />
                </div>
                <div className="boxField">
                    <label>Endereço: </label>
                    <input className="endereco" value={events.logradouro} />
                </div>
                <div className="boxField">
                    <label>Bairro: </label>
                    <input className="bairro" value={events.bairro} />
                </div>
                <div className="boxField">
                    <label>Cidade: </label>
                    <input className="cidade" value={events.localidade} />
                </div>
                <div className="boxField">
                    <label>UF: </label>
                    <input className="uf" value={events.uf} />
                </div>
                <div className="box-button">
                    <button type="submit">Salvar cep</button>
                </div>
            </form>
        </BoxData>
    )
}

export default ListCep