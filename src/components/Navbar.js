import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="navbar__content">
            <h3 className="navbar__logo">
              example
              <span>page</span>
            </h3>
            <ul className="navbar__links">
              <li className="navbar__item">About us</li>
              <li className="navbar__item">Portfolio</li>
              <li className="navbar__item">Something Else</li>
              <li className="navbar__item">News</li>
              <li className="navbar__item">Contact Us</li>
              <li className="navbar__item navbar__item--inverted">
                Looking to do something?
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
