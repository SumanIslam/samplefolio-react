import styled from "styled-components";
import { primaryColor, secondaryColor, darkColor, whiteColor } from "../../styles/variable";
import breakpoint from "../../styles/breakpoint";

export const SkillSectionContainer = styled.section`
  background-image: linear-gradient(
    135deg,
    ${primaryColor} 0%,
    ${secondaryColor} 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 9.35rem 12rem 6.25rem 12rem;
  margin-top: -6.25rem;
  margin-bottom: -1px;
  color: ${whiteColor};

  @media screen and ${breakpoint.device.tab_land} {
    padding: 6.25rem 0;
    clip-path: none;
    margin-top: 0;
    -webkit-clip-path: none;
  }

  & .width {
    width: 50%;

    @media screen and ${breakpoint.device.phone} {
      width: 100%;
    }
  }

  & .svg {
    color: ${primaryColor};
    width: 2rem;
    height: 2rem;
  }
`;

export const SkillBoxContainer = styled.div`
  background-color: rgba(209,213,219,1);
  padding: 0.5rem 1rem;
  color: ${darkColor};
`
