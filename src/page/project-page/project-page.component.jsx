import React, { useEffect } from "react";

// dependencies
import { v4 as uuidv4 } from 'uuid';

// components
import SectionTitle from "../../components/section-title/section-title.component";
import ProjectMainContent from '../../components/project/project-main-content/project-main-content';

// styles
import {
	ProjectPageContainer,
	ProjectContentWrapper,
} from './project-page.style';

// data
import { projectsData } from '../../constants/projects.data.js';

const ProjectPage = () => {
	useEffect(() => {
		const handleScroll = () => {
			if(window.scrollY > 0) {
				// eslint-disable-next-line no-restricted-globals
				return scrollTo(0,0)
			}
		}

		handleScroll();
	})
	
	return (
		<ProjectPageContainer>
			<div className='container'>
				<ProjectContentWrapper>
					<SectionTitle title='Project' />
					{projectsData.map((project) => (
						<ProjectMainContent key={uuidv4()} project={project} />
					))}
				</ProjectContentWrapper>
			</div>
		</ProjectPageContainer>
	);
}
export default ProjectPage;