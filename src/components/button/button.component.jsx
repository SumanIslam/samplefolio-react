import React from "react";

// react-scroll
import { Link } from 'react-scroll';

// component
import { ButtonStyle, ButtonContainer } from "./button.style";

const Button = ({ primary, text, link, navigate }) => (
  <ButtonStyle>
    <ButtonContainer primary={primary}>
      {
        link ? (
          <a href={link} rel="noreferrer" target="_blank">{text}</a>
        ) :
        (
          <span>
            <Link to={navigate} smooth duration={500}>{text}</Link>
          </span>
        )
      }
      
    </ButtonContainer>
  </ButtonStyle>
);

export default Button;