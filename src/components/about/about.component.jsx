import React, { useState, useEffect } from "react";

// dependencies
import Fade from 'react-reveal/Fade';
import { v4 as uuidv4 } from 'uuid';

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
		<AboutContainer id='about'>
			<div className='container'>
				<SectionTitle title='About Me' />
				<AboutContentWrapper className='row'>
					<div className='col-md-4 col-sm-12'>
						<Fade bottom duration={1000} delay={600} distance='30px'>
							<AboutContentWrapperImage>
								<img
									className='img-fluid rounded shadow-lg'
									height='auto'
									width='300px'
									src={profile}
									alt='Profile'
								/>
							</AboutContentWrapperImage>
						</Fade>
					</div>
					<div className='col-md-8 col-sm-12'>
						<Fade
							left={isDesktop}
							bottom={isMobile}
							duration={1000}
							delay={1000}
							distance='30px'
						>
							<AboutContentWrapperInfo>
								{aboutInfo.map((info) => (
									<AboutInfo key={uuidv4()} content={info} />
								))}
								<Button
									text='Resume'
									link='https://drive.google.com/uc?export=download&id=1qV_Bwrxruk8SaQz18cX_mZbpHayhyn7j'
								/>
								{/* <Button text="Resume" link="https://drive.google.com/u/0/uc?id=1kV1WVnMWCvmQrfRZRjFKOdXbZCvwfjRn&export=download"/> */}
							</AboutContentWrapperInfo>
						</Fade>
					</div>
				</AboutContentWrapper>
			</div>
		</AboutContainer>
	);
};

About.defaultProps = {
  aboutInfo: [
    "Hey there! I am Suman Islam, a self-taught developer, tech enthusiast, and JavaScript lover. I develop quality responsive websites, clean user interfaces, and rich interactive web apps targeting JavaScript, React, Node, and other web technologies. I'm open to learning and adapting to work, using skills to solve complex challenges, and providing value to an organization's growth.",
    "Until now, I have worked on solo, Fully responsive, Front-end web-based projects built from scratch. I am looking forward to gaining experience working on full-stack web-based projects in a team to work according to best industry practices to write maintainable code."
  ]
}

export default About;
