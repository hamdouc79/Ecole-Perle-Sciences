import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil";
import Ecole from "./page/ecole";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/fouter";
import Pedagogie from "./page/pedagogie";
import Recrutement from "./page/recrutement";
import ScrollToTop from './components/ScrollToTop';
import Scolarite from './page/scolarite';
import EspaceParents from "./page/espaceParents";
function App() {
  return (
    <>
     <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/pedagogie" element={<Pedagogie />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/scolarite" element={<Scolarite />} />
        <Route path="/espaceParents" element={<EspaceParents/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;