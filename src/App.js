import React from "react";
import Introducao from "./views/Introducao";
import DesingEngenharia from "./views/DesingEngenharia";
import './App.css';
import Projetos from "./views/Projetos";
import Contato from "./views/Contato";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="container">
      <Introducao />
      <DesingEngenharia />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
