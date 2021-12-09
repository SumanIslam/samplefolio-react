import React, { useEffect, useState } from 'react';
// dependencies
import Fade from 'react-reveal';
// component
import Button from "../button/button.component";
// styles
import { ColorSpan, HeroTitle, HeroWrapper } from "./hero.style";


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
    <HeroWrapper id="top">
      <div>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <HeroTitle>
            Hi, my name is <ColorSpan>Suman Islam</ColorSpan>
            <br />
            I'm the Developer you need
          </HeroTitle>
        </Fade>
        <Fade bottom={isDesktop} left={isMobile} duration={1000} delay={500} distance="30px">
          <Button primary={true} text="Know More" link={null}/>
        </Fade>
      </div>
    </HeroWrapper>
  )
};

export default Hero;