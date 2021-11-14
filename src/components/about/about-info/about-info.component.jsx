import React from "react";

// style
import { AboutContentWrapperInfoText } from "./about-info.style";

const AboutInfo = ({ content }) => (
  <AboutContentWrapperInfoText>
    {content}
  </AboutContentWrapperInfoText>
);

export default AboutInfo;