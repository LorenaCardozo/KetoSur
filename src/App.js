import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import './Estilos/estilo.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a mi Tienda!!!" />
    </div>
  );
}

export default App;
