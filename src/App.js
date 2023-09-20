import './App.css';
import './styles/Header.css'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import Filtros from './components/Filtros';

export default function App() {
  return (
    <>
      <Header />
      <ItemList greetings={'Bienvenido'} />
      <Filtros />
    </>
  );
}