import styled from "styled-components";
import { primaryColor, secondaryColor, whiteColor } from '../../utils/variable';
import breakpoint from "../../utils/breakpoint";

export const ContactSectionContainer = styled.section`
  background-image: linear-gradient(
    135deg,
    ${primaryColor} 0%,
    ${secondaryColor} 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 9.375rem 0 6.25rem 0;
  color: ${whiteColor};

  @media screen and ${breakpoint.device.tab_land} {
    padding: 10rem 0;
    clip-path: none;
    -webkit-clip-path: none;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 0;
  padding: 0 1.25rem;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapperText = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  margin-top: -1.5rem;

  @media screen and ${breakpoint.device.phone} {
    font-size: 1.2rem;
  }
;`