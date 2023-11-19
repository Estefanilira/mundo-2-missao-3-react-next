import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link to="dados" className="nav-link">Novo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path ="/" element={<LivroLista/>} />
          <Route path="dados" element={<LivroDados/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;