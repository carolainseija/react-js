import React, { useState } from 'react';
import './App.css';
import Button from './components/buttons/Button';
import CardAlert from './components/Cards/CardAlert';

function App() {

  const [mesagges, setMesages] = useState({
    title: "Esto es un titulo nuevo",
    text: "Aca el estado ya me cambio"
  })

  /*aca la funcion que cambia los textos */
  const clickHandler = () => {
    console.log("click button")
    setMesages({
      title: "titulo nuevo2",
      text: "ya me cambio2"
    })
  }
  return (
    <div className='center'>
      <p className='texts'>Click Aqui</p>
      <Button clickHandler={clickHandler} />
      <CardAlert title={mesagges.title} text={mesagges.text} />
    </div>
  );
}

export default App;
