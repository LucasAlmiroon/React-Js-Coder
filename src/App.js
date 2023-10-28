import './App.css';
import './styles/Header.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ContextProvider from './context/ContextProvider';
import Checkout from './components/Checkout';
import Registrarse from './components/Registrarse';
import About from './components/About';

export default function App() {
  return (
    <ContextProvider>
      <Header>
        <Routes>
          <Route exact path="/:marca/:tipo" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/registro" element={<Registrarse />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Header>
    </ContextProvider>
  );
}