import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Approach from "./components/Approach/Approach";
import Platform from "./components/Platform/Platform";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Investments from "./components/Investments/Investments";

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
      </div>
    );
  }
}

export default App;
