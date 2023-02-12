import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subheader from "./components/Subheader";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Subheader />
      <About />
      <Team />
      <Footer />
    </>
  );
}

export default App;
