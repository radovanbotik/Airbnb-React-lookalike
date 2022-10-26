import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrap">
      <Navigation />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
