import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade'

// component
import Button from "../button/button.component";

// styles
import { HeroWrapper, HeroTitle, ColorSpan } from "./hero.style";

const Hero = () => {
  const [isDesktop, setDesktop] = useState(false)
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setDesktop(true);
      setMobile(false);
    } else {
      setMobile(true);
      setDesktop(false);
    }
  }, []);
  return (
    <HeroWrapper>
      <div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <HeroTitle>
            Hi, my name is <ColorSpan>Suman Islam</ColorSpan>
            <br />
            I'm the Developer you need
          </HeroTitle>
        </Fade>
        <Fade bottom={isDesktop} left={isMobile} duration={1000} delay={500} distance="30px">
          <Button />
        </Fade>
      </div>
    </HeroWrapper>
  )
};

export default Hero;