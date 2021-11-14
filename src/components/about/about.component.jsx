import React, { useState, useEffect } from "react";

// dependencies
import Fade from 'react-reveal/Fade';

// components
import SectionTitle from "../section-title/section-title.component";
import AboutInfo from "./about-info/about-info.component";
import Button from "../button/button.component"
import profile from '../../assets/profile.jpg';

// styles
import { 
  AboutContainer,
  AboutContentWrapper,
  AboutContentWrapperImage,
  AboutContentWrapperInfo,
} from "./about.style";

const About = ({ aboutInfo }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <AboutContainer id="about">
      <div class="container">
        <SectionTitle title="About Me"/>
        <AboutContentWrapper className="row">
          <div className="col-md-4 col-sm-12">
            <Fade bottom duration={1000} delay={600} distance="30px">
              <AboutContentWrapperImage>
                <img className="img-fluid rounded shadow-lg" height="auto" width="300px" src={profile} alt="Profile" />
              </AboutContentWrapperImage>
            </Fade>
          </div>
          <div class="col-md-8 col-sm-12">
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <AboutContentWrapperInfo>
                {
                  aboutInfo.map(info => (
                    <AboutInfo content={info} />
                  ))
                }
                <Button text="Resume" link="https://drive.google.com/file/d/1kV1WVnMWCvmQrfRZRjFKOdXbZCvwfjRn/view?usp=sharing"/>
              </AboutContentWrapperInfo>
            </Fade>
          </div>
        </AboutContentWrapper>
      </div>
    </AboutContainer> 
  )
};

About.defaultProps = {
  aboutInfo: [
    "Hey there! My name is Suman Islam, a self taught Developer, tech enthusiast, JavaScript lover. I develope quality responsive websites, clean user interfaces and rich interactive web apps targeting JavaScript, React, Node and other web technologies. I'm open to learn and adapt to work, use skills to solve complex challenges, provide value to the growth of an organization",
    "Until now, I have worked on Solo, Fully responsive, Front-end Web-based projects built from scratch and looking further to gain experience of working on full-stack web based projects in a team to work according to best industry practices to write maintainable code."
  ]
}

export default About;