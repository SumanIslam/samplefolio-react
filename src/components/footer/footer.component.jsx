import React from "react";

// react-scroll
import { Link } from 'react-scroll';

// styles
import { FooterContainer, SocialLinkContainer } from "./footer.style";

const Footer = () => (
  <FooterContainer className="navbar-static-form">
    <div className="container">
      <div className="text-center">
        <Link to="top" smooth duration={500}  className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </Link>
      </div>
      
      <SocialLinkContainer>
        <a href="https://www.linkedin.com/in/sumanislam/" rel="noreferrer" target="_blank">
          <i class="fa fa-linkedin fa-inverse"></i>
        </a>
        <a href="https://github.com/SumanIslam" rel="noreferrer" target="_blank">
          <i class="fa fa-github fa-inverse"></i>
        </a>
        <a href="https://www.facebook.com/sumanislam.raju/" rel="noreferrer" target="_blank">
          <i class="fa fa-facebook fa-inverse"></i>
        </a>
        <a href="https://twitter.com/SumanIs60417396" rel="noreferrer" target="_blank">
          <i class="fa fa-twitter fa-inverse"></i>
        </a>
        <a href="https://codepen.io/Suman_Islam" rel="noreferrer" target="_blank">
          <i class="fa fa-codepen fa-inverse"></i>
        </a>
      </SocialLinkContainer>
      <hr />
      <p className="footer-text">
        © 2021 - Copyright Reserved
      </p>

    </div>
  </FooterContainer>
);

export default Footer;