import React from "react";

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

const About = ({ aboutInfo }) => (
  <AboutContainer>
    <div class="container">
      <SectionTitle title="About Me"/>
      <AboutContentWrapper className="row">
        <div className="col-md-4 col-sm-12">
          <AboutContentWrapperImage>
            <img className="img-fluid rounded shadow-lg" height="auto" width="300px" src={profile} alt="Profile" />
          </AboutContentWrapperImage>
        </div>
        <div class="col-md-8 col-sm-12">
          <AboutContentWrapperInfo>
            {
              aboutInfo.map(info => (
                <AboutInfo content={info} />
              ))
            }
            <Button text="View Resume" />
          </AboutContentWrapperInfo>
        </div>
      </AboutContentWrapper>
    </div>
  </AboutContainer>
  
);

About.defaultProps = {
  aboutInfo: [
    "Hey there! My name is Suman Islam, a self taught Developer, tech enthusiast, JavaScript lover. I develope quality responsive websites, clean user interfaces and rich interactive web apps targeting JavaScript, React, Node and other web technologies. I'm open to learn and adapt to work, use skills to solve complex challenges, provide value to the growth of an organization",
    "Until now, I have worked on Solo, Fully responsive, Front-end Web-based projects built from scratch and looking further to gain experience of working on full-stack web based projects in a team to work according to best industry practices to write maintainable code."
  ]
}

export default About;