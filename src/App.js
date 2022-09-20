import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';
import Title from './components/Title/Title';
import Effect from './components/Effect/Effect';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = () => console.log('agregar al carrito')

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {/* <Navbar />
      <ItemListContainer greeting="Todos nuestros productos" />
      <img src="/images/cart.svg"/> */}
      {/* <Counter render={<Title title='Contar Manzanas' text='verdes'/>}>
        <Title title='Contar Manzanas' text='rojas'/>
        <ItemListContainer greeting={'hola desde itemlistcontainer'}/>
      </Counter>
      <Counter>
        <Title title='Contar Naranjas'/>
      </Counter> */}
      {/* Ejemplo del desafio contador */}
      {/* <Counter initial={0} stock={10} onAdd={handleOnAdd}/> */}
      {show ? <Effect /> : null}

    </div>
  );
}

export default App;
