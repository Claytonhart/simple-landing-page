import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__element footer__element--first">
          <h3>examplepage</h3>
          <p>Head Office</p>
          <p>123 Example Street</p>
          <p>San Francisco</p>
          <p className="footer__element--email">example@page.com</p>
          <p>2018 Example Page Ltd.</p>
        </div>
        <div className="footer__element">
          <h4>explore avenue living</h4>
          <p>home page</p>
          <p>about us</p>
          <p>community enagement</p>
          <p>our leadership</p>
        </div>
        <div className="footer__element">
          <h4>asset management</h4>
          <p>our portfolio</p>
          <p>investment offerings</p>
          <p>contact us</p>
        </div>
        <div className="footer__element">
          <h4>legal</h4>
          <p>terms and conditions</p>
          <p>privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
