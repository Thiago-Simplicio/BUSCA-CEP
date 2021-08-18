import React, { useState } from 'react'

import {ContainerApp} from './AppStyled' 

import api from './services/api'

import ListCep from './components/ListaCep/ListCep'

function App() {

  const [events, setEvents] = useState([])
  const [cep, setCep] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`,{
        cep
      })

      setEvents(response.data)
      setCep('')
  }

  return (
    <ContainerApp>
        <h1>Buscar CEP</h1>
        <div className="boxForm">
          <form onSubmit={handleSubmit}>
            <div>
              <input onChange={e => setCep(e.target.value)} placeholder="00000-000" name="cep" value={cep}/>
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
              <button type="submit">Buscar Cep</button>
            </div>
          </form>
        </div>
        <br />
        <ListCep events={events}/>
    </ContainerApp>
  );
}

export default App;
