import React from "react";

// react-scroll
import { Link } from 'react-scroll';

// component
import { ButtonStyle, ButtonContainer } from "./button.style";

const Button = ({ primary, text, link }) => (
  <ButtonStyle>
    <ButtonContainer primary={primary}>
      {
        link ? (
          <a href={link} rel="noreferrer" target="_blank">{text}</a>
        ) :
        (
          <span>
            <Link to="about" smooth duration={500}>{text}</Link>
          </span>
        )
      }
      
    </ButtonContainer>
  </ButtonStyle>
);

export default Button;