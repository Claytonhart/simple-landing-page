import React, { Component } from "react";
import Slider from "react-slick";

class About extends Component {
  render() {
    const settings = {
      dots: true
    };

    return (
      <section className="about" id="about">
        <div className="about-content-wrapper container">
          <h1 className="about__header">Avenue living asset management</h1>
          <h3 className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            repudiandae, provident
          </h3>
          <Slider {...settings}>
            <div className="carousel-container">
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-money" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-home" aria-hidden="true" />
                <p>lorem ipsum dolor etc words</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-building" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-pagelines" aria-hidden="true" />
                <p>lorem ipsum dolor etc etc</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-users" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-money" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-home" aria-hidden="true" />
                <p>lorem ipsum dolor etc words</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-building" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-pagelines" aria-hidden="true" />
                <p>lorem ipsum dolor etc etc</p>
              </div>
              <div className="carousel-item">
                <h3>1000 Words</h3>
                <i className="fa fa-users" aria-hidden="true" />
                <p>lorem ipsum dolor</p>
              </div>
            </div>
          </Slider>
          <p className="about__legal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae vel, nobis recusandae deleniti saepe iure. Architecto
            quo iste necessitatibus.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
