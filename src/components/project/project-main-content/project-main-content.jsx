import React, { useEffect, useState } from "react";

// dependencies
import Fade from 'react-reveal/Fade';

// components
import TextContent from "../text-content/text-content.component";
import ImageContent from "../image-content/image-content.component";

// styles
import { Row } from "./project-main-content.style";

const ProjectMainContent = ({ project }) => {
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
    <Row>
      <div className="row mb-3">
        <div className="col-lg-5 col-sm-12">
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <TextContent {...project} />
          </Fade>
        </div>
        <div className="col-lg-7 col-sm-12">
          <Fade
            right={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
          <ImageContent {...project} />
          </Fade>
        </div>
      </div>
    </Row>
  )
}




export default ProjectMainContent;