import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App">
      {/* <div>
        <button onClick={() => setPage('list')}>listado</button>
        <button onClick={() => setPage('detail')}>detalle</button>
      </div>
      {page === 'list' && <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>}
      {page === 'detail' && <ItemDetailContainer /> } */} 
      <BrowserRouter>
        <Navbar />
        {/* <div>
          <Link to='/'>listado</Link>
          <Link to='/detail'>detalle</Link>
        </div> */}
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
