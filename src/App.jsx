import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import GestionPatrimoine from './pages/GestionPatrimoine';
import EpargneRetraite from './pages/EpargneRetraite';
import Plus from './pages/Plus';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/gestion-patrimoine" element={<GestionPatrimoine />} />
          <Route path="/epargne-retraite" element={<EpargneRetraite />} />
          <Route path="/plus" element={<Plus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

