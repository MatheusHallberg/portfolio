import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Timeline from "./Components/Timeline/Timeline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Portfolio />
        <Timeline />
        <Contato />
        <Footer />
      </div>
    );
  }
}

export default App;
