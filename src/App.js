import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import './Estilos/estilo.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Tienda!!!" />}/>
            <Route path="/producto/:productoId" element={<ItemDetailContainer />}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
