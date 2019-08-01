import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="contact">
        <div className="container">
          <h2 className="section-heading">Contact Us</h2>
          <p>
            <span className="glyphicon glyphicon-earphone" /> +1(23) 456 7890
          </p>
          <p>
            <span className="glyphicon glyphicon-envelope" /> info@example.com
          </p>
        </div>
      </div>

      <div className="small-print">
        <div className="container">
          <p>Copyright &copy; Example.com 2015</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
