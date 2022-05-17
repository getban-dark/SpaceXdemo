import React from "react";
import Vehicals from "./components/Vehicals";
import Starlinkview from "./components/Starlinkview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Orderstarlink from "./components/Orderstarlink";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Vehicals />
      <Starlinkview />
      <Orderstarlink />
      <Footer />
    </div>
  );
}

export default App;
