import React from "react";

// dependencies
import { v4 as uuidv4 } from 'uuid';
// components
import ProjectMainContent from "./project-main-content/project-main-content";
import SectionTitle from '../section-title/section-title.component';

// images
import CrawnClothing from "../../assets/crwn-clothing.png";
import MoviesHome from '../../assets/movieshome.png';

// styles
import { ProjectSectionContainer, ProjectContentWrapper } from "./project-section.style";

const Project = ({ projects }) => {
  return (
    <ProjectSectionContainer>
      <div className="container">
        <ProjectContentWrapper>
          <SectionTitle title="Projects" />
          {
            projects.map(project => (
              <ProjectMainContent key={uuidv4()} project={project} />
            ))
          }
        </ProjectContentWrapper>
      </div>
    </ProjectSectionContainer>
  )
};

Project.defaultProps = {
  projects: [
    {
      title: "Crwn Clothing",
      description1: "Crwn Clothing is a fictional E-commerce Wep Application",
      description2: "Omnifood a fictional restaurant website where customer can find healthy foods. Here you will get 24/7 service. It has various menu items. You can order online too.",
      stack: ["React","Redux","Styled-Component","Node","Firebase", "Stripe"],
      liveLink:"https://crwn-live-preview.herokuapp.com/",
      sourceLink: "https://github.com/SumanIslam/omnifood",
      imageSource: CrawnClothing,
    },
    {
      title: "Crwn Clothing",
      description1: "Crwn Clothing is a fictional E-commerce Wep Application",
      description2: "Omnifood a fictional restaurant website where customer can find healthy foods. Here you will get 24/7 service. It has various menu items. You can order online too.",
      stack: ["React","Redux","Styled-Component","Node","Firebase"],
      liveLink:"https://crwn-live-preview.herokuapp.com/",
      sourceLink: "https://github.com/SumanIslam/omnifood",
      imageSource: MoviesHome,
    },
    {
      title: "Crwn Clothing",
      description1: "Crwn Clothing is a fictional E-commerce Wep Application",
      description2: "Omnifood a fictional restaurant website where customer can find healthy foods. Here you will get 24/7 service. It has various menu items. You can order online too.",
      stack: ["React","Redux","Styled-Component","Node","Firebase"],
      liveLink:"https://crwn-live-preview.herokuapp.com/",
      sourceLink: "https://github.com/SumanIslam/omnifood",
      imageSource: MoviesHome,
    },
  ]
};

export default Project;