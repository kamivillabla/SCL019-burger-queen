import './App.css';
import Productos from './components/Productos';

function App() {
  return (
    <div className='menu-contenedor'>
     <div>Pizzas</div>
     <div>Bebidas</div>
     <Productos></Productos>
    </div>
  );
}

export default App;
