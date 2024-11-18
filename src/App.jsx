import "./App.scss";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Training from "./components/Training/Training";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Form/Contact";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Training/>
      <Projects/>
      <ContactForm/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
