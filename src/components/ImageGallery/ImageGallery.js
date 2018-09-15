import React from "react";
import Slider from "react-slick";

const ImageGallery = () => {
  const settings = {
    dots: true
  };

  return (
    <section className="image-gallery">
      <Slider {...settings}>
        <div className="image-gallery-item image-gallery-item--1">
          <h2 className="image-gallery-item__header">The long term view</h2>
          <p className="image-gallery-item__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iusto, sit et debitis
          </p>
        </div>
        <div className="image-gallery-item image-gallery-item--2">
          <h2 className="image-gallery-item__header">
            An unconventional approach
          </h2>
          <p className="image-gallery-item__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iusto, sit et debitis
          </p>
        </div>
        <div className="image-gallery-item image-gallery-item--3">
          <h2 className="image-gallery-item__header">We are owners first</h2>
          <p className="image-gallery-item__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iusto, sit et debitis
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default ImageGallery;
