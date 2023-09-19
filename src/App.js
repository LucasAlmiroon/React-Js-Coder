import './App.css';
import './styles/Header.css'
import Header from './componentes/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './componentes/ItemList';
import Filtros from './componentes/Filtros';

export default function App() {
  return (
    <>
      <Header />
      <ItemList greetings={'Bienvenido'} />
      <Filtros />
    </>
  );
}