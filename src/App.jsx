import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CardSlider from "./components/CardSlider";

function App() {
  return (
    <div className="wrap">
      <Navigation />
      <Hero />
      <CardSlider />
    </div>
  );
}

export default App;
