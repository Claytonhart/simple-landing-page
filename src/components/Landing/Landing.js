import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Landing extends Component {
  render() {
    return (
      <main>
        <div className="banner-image">
          <h1 className="banner-image__text">
            A LONG DESCRIPTION ABOUT OUR COMPANY AND WHAT WE STAND FOR
          </h1>
          <div className="banner-image__scroll">
            <AnchorLink name="scroll-down" href="#about" offset="80">
              <i
                className="fa fa-arrow-down banner-image__arrow"
                aria-hidden="true"
              />
            </AnchorLink>
            <div className="banner-image__info">Scroll to learn more</div>
          </div>
        </div>
      </main>
    );
  }
}

export default Landing;
