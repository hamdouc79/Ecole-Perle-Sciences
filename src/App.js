import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil";
import Ecole from "./page/ecole";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/fouter";
import Pedagogie from "./page/pedagogie";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/pedagogie" element={<Pedagogie />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;