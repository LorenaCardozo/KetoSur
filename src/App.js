import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import './Estilos/estilo.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './Storage/cartContext';
import Cart from './Components/Cart';
import Finished from './Components/Finished';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Tienda!!!" />}/>
            <Route path="/producto/:productoId" element={<ItemDetailContainer />}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/finished/:orderId" element={<Finished />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
