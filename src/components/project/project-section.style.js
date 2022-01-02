import styled from "styled-components";
import breakpoint from '../../utils/breakpoint';
import { whiteColor, darkBlueText } from "../../utils/variable";

export const ProjectSectionContainer = styled.section`
  background-color: ${whiteColor};
  color: ${darkBlueText};
  margin-top: -6.25rem;
  padding-top: 9.375rem;
  margin-bottom: 10rem;

  @media screen and ${breakpoint.device.tab_land} {
    margin-top: 0;
    padding-top: 3.125rem;
  }
`;

export const ProjectContentWrapper = styled.div`
  .project-wrapper {
    margin-bottom: 9.375rem;

    @media screen and ${breakpoint.device.phone} {
      margin-bottom: 0rem;
    }
`;

export const ProjectButton = styled.div`
  text-align: center;
`;