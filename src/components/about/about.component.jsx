import React from "react";

// components
import SectionTitle from "../section-title/section-title.component";
import profile from '../../assets/profile.jpg'

// styles
import { 
  AboutContainer,
  AboutContentWrapper,
  AboutContentWrapperImage,
  AboutContentWrapperInfo,
} from "./about.style";

const About = () => (
  <AboutContainer>
    <SectionTitle title="About Me"/>
    <AboutContentWrapper className="row">
      <div className="col-md-4 col-sm-12">
        <AboutContentWrapperImage>
          <img className="img-fluid rounded-circle shadow-lg" height="auto" width="300px" src={profile} alt="Profile" />
        </AboutContentWrapperImage>
      </div>
      <div class="col-md-8 col-sm-12">
        <AboutContentWrapperInfo>
          
        </AboutContentWrapperInfo>
      </div>
    </AboutContentWrapper>
  </AboutContainer>
  
);

export default About;