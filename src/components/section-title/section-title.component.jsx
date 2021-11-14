import React from "react";

// dependencies
import Fade from 'react-reveal/Fade';

// styles
import { TitleContainer } from "./section-title.style";

const SectionTitle = ({title}) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <TitleContainer>{title}</TitleContainer>
  </Fade>
);

export default SectionTitle;