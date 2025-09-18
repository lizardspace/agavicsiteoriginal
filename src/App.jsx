import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import GestionPatrimoine from './pages/GestionPatrimoine';
import EpargneRetraite from './pages/EpargneRetraite';
import EpargneSalariale from './pages/EpargneSalariale';
import Prevoyance from './pages/Prevoyance';
import PeePereco from './pages/PeePereco';
import Participation from './pages/Participation';
import Interessement from './pages/Interessement';
import Actualite from './pages/Actualite';
import Contact from './pages/Contact';
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
          <Route path="/epargne-salariale" element={<EpargneSalariale />} />
          <Route path="/prevoyance" element={<Prevoyance />} />
          <Route path="/pee-pereco" element={<PeePereco />} />
          <Route path="/participation" element={<Participation />} />
          <Route path="/interessement" element={<Interessement />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plus" element={<Plus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

