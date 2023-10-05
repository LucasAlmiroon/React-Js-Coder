import './App.css';
import './styles/Header.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';

export default function App() {
  return (
    <Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<Products />} />
        <Route exact path="/productos/:marca/:tipo" element={<Products />} />
      </Routes>
    </Header>
  );
}