import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__top-content">
          <div className="contact__left">
            <h3 className="contact__top-header">Investment inquiries</h3>
            <p className="contact__top-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              voluptate
            </p>
            <button className="contact__top-button">Contact Us</button>
          </div>
          <div className="contact__middle" />
          <div className="contact__right">
            <h3 className="contact__top-header">Looking for your next home?</h3>
            <p className="contact__top-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              voluptate
            </p>
            <button className="contact__top-button">
              Looking for your next home?
            </button>
          </div>
        </div>
        <div className="contact__bottom-content">
          <h3 className="contact__bottom-header">Get in touch</h3>
          <div className="contact__bottom-info-container">
            <div className="contact__bottom-info">
              <p className="contact__bottom-us">Call us</p>
              <p className="contact__bottom-links">999-999-9999</p>
            </div>
            <div className="contact__bottom-info">
              <p className="contact__bottom-us">Email Us</p>
              <p className="contact__bottom-links">example@page.com</p>
            </div>
            <div className="contact__bottom-info">
              <p className="contact__bottom-us">Follow us</p>
              <p className="contact__bottom-links">Follow us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
