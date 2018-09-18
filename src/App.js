import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Approach from "./components/Approach/Approach";
import Platform from "./components/Platform/Platform";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Investments from "./components/Investments/Investments";
import Opportunites from "./components/Opportunities/Opportunities";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <About />
        <Approach />
        <Platform />
        <ImageGallery />
        <Investments />
        <Opportunites />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
