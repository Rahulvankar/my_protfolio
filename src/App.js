// import logo from './logo.svg';
import './main.css';
import Header from './componets/header/Header';
import Home_page from './componets/home_page/Home_page';
import About from './componets/home_page/About';
import Services from './componets/home_page/Services';
import Portfolio from './componets/home_page/Portfolio';
import ContactSkills from './componets/home_page/ContactSkills';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
function App() {
  useEffect(() => emailjs.init("uyz-pUjvCiCu9KfF_"), []);

  return (
    <>
      <Header/>
      <Home_page/>
      <About/>
      {/* <Services/> */}
      <Portfolio/>
      <ContactSkills/>
    </>
  );
}

export default App;
