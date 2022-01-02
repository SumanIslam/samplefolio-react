import React from "react";
import SectionTitle from "../../components/section-title/section-title.component";

// styles
import { ProjectPageContainer } from "./project-page.style";
const ProjectPage = () => (
  <ProjectPageContainer>
    <div className="container">
      <SectionTitle title="Project" />
    </div>
  </ProjectPageContainer>
);

export default ProjectPage;