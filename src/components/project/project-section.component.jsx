import React from "react";
import { Link } from "react-router-dom";

// dependencies
import { v4 as uuidv4 } from 'uuid';
import { ButtonContainer } from "../button/button.style";
import SectionTitle from '../section-title/section-title.component';

// components
import ProjectMainContent from "./project-main-content/project-main-content";

// data
import { projectsData } from "../../constants/projects.data";

// styles
import { ProjectButton, ProjectContentWrapper, ProjectSectionContainer } from "./project-section.style";

const Project = () => (
	<ProjectSectionContainer>
		<div className='container'>
			<ProjectContentWrapper>
				<SectionTitle title='Projects' />
				{projectsData
					.filter((data) => data.showcase)
					.map((project) => (
						<ProjectMainContent key={uuidv4()} project={project} />
					))}
			</ProjectContentWrapper>
			<ProjectButton>
				<ButtonContainer primary='primary'>
					<span>
						<Link to='/projects'>See More Projects</Link>
					</span>
				</ButtonContainer>
			</ProjectButton>
		</div>
	</ProjectSectionContainer>
);

export default Project;