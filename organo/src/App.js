

import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulário from './componentes/Formulario';
import Time from './componentes/Time/Time';


function App() {

  const times = [
    {
      nome:"Progamação",
      corPrimaria:"#57c278",
      corSecundaria:"#d9f7e9"
    },
    {
      nome:"Front-End",
      corPrimaria:"#82cffa",
      corSecundaria:"#e8f8ff"
    },
    {
      nome:"Data Science",
      corPrimaria:"#a6d157",
      corSecundaria:"f0f8e2"
    },
    {
      nome:"Devops",
      corPrimaria:"#e06869",
      corSecundaria:"#fde7e8"
    },
    {
      nome:"UX e Desing",
      corPrimaria:"#db6e8f",
      corSecundaria:"#fae9f5"
    },
    {
      nome:"Moblie",
      corPrimaria:"#ffba05",
      corSecundaria:"#fff5d9"
    },
    {
      nome:"Inovação e Gestão",
      corPrimaria:"#ff8a29",
      corSecundaria:"#ffeedf"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulário times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
    
      
    </div>
  );
}

export default App;
