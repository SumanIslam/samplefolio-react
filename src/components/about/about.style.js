import styled from "styled-components";
import { primaryColor, secondaryColor, whiteColor } from "../../styles/variable";
import breakpoint from "../../styles/breakpoint";

export const AboutContainer = styled.div`
  padding: 2rem 0rem;
  background-color: ${primaryColor};
  background-image: linear-gradient(
    135deg,
    ${primaryColor} 0%,
    ${secondaryColor} 100%
  );
  color: ${whiteColor};
  height: 100%;
  border-top: 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @media screen and ${breakpoint.device.tab_land} {
    height: 100%;
    -webkit-clip-path: none;
    clip-path: none;
  }

  @media screen and ${breakpoint.device.phone} {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const AboutContentWrapper = styled.div`
  @media screen and ${breakpoint.device.phone} {
      padding-bottom: 5rem;
    }
`;

export const AboutContentWrapperImage = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    @media screen and ${breakpoint.device.tab_land} {
      height: 100%;
    }
    @media screen and ${breakpoint.device.tab_port_sm} {
      padding-bottom: 6.4rem;
    }
`;

export const AboutContentWrapperInfo = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;

    @media ${breakpoint.device.tab_port_sm} {
      align-items: center;
    }
`;

