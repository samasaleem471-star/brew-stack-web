import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MenuCards from "./components/MenuCards.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx"

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MenuCards/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
