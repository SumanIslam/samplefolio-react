import React from "react";
// dependencies
import { Event, Timeline } from 'react-trivial-timeline';
// styles
import { primaryColor, whiteColor } from "../../utils/variable";
// components
import SectionTitle from '../section-title/section-title.component';
import { EducationSectionContainer, TimelineContainer } from './education.style';


const Education = () => (
  <EducationSectionContainer>
    <SectionTitle title="Education" />
    <TimelineContainer>
      <Timeline>
        <Event
          interval={{ start: 2019, end: 2022 }}
          title="B.Sc In Computer Science And Engineering"
          iconFill={primaryColor}
          iconOutline={null}
          intervalBackground={primaryColor}
          intervalColor={whiteColor}
        >
          I completed my B.Sc from Uttara University with CGPA 4.00.
        </Event>
        <Event 
          interval="2015 – 2017"
          title="Higher Secondary Certificate(HSC)"
          iconFill={primaryColor}
          iconOutline={null}
          intervalBackground={primaryColor}
          intervalColor={whiteColor}
        >
          I passed HSC in 2017 with GPA 4.92 from B.A.F Shaheen College (Science), Dhaka
        </Event>
        <Event 
          interval="2010 – 2015"
          title="Secondary School Certificate(SSC)"
          iconFill={primaryColor}
          iconOutline={null}
          intervalBackground={primaryColor}
          intervalColor={whiteColor}
        >
          I passed SSC in 2015 with GPA 5 from Noyagaon M.A. Majid Miah High School (Science), Tongi, Gazipur
        </Event>
      </Timeline>
    </TimelineContainer>
    
  </EducationSectionContainer>
    
);

export default Education;
