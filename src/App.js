import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import AvatarJsx from './components/AvatarJsx';
// import Button from './components/Button/Button'
// import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar'

function App() {

  // const accept = () => {
  //   console.log('cancele')
  // }

  return (
    <div id="1" className="App">
      {/* <header className="App-header "> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* {React.createElement(AvatarJsx, { name: 'Jose', id: '2'})} */}
        {/* <AvatarJsx name='Seba' id='1' desc='Tengo 28 años'/>
        <Button label={'cancelar'} background='red' action={accept}/>
        <Button label={'aceptar'} background={'green'} action={() => console.log('acepte')}/> */}
        {/* <p className="Titulo" style={{ backgroundColor: 'blue'}} onClick={() => console.log('click')}>BIENVENIDOS</p>
        <button>boton</button>
        <input /> */}
      {/* </header> */}
        {/* <Counter /> */}
        <Navbar />
        <ItemListContainer greeting={'Estos son nuestros productos'}/>
    </div>
  );
}

export default App;
