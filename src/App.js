import './App.css';
import Header from './componentes/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContent from './componentes/ItemListContent';
import Filtros from './componentes/Filtros';

export default function App() {
  return (
    <>
      <Header />
      <ItemListContent greetings={'Bienvenido'} />
      <Filtros />
    </>
  );
}