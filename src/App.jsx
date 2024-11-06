import "./App.scss";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
