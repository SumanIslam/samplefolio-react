import styled from "styled-components";
import { whiteColor, darkBlueText, defaultFontSize } from "../../styles/variable";
import breakpoint from "../../styles/breakpoint";

export const HeroWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0px;
  background: ${whiteColor};
  font-weight: 400;
  padding: 0rem 6.2rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  
  @media screen and ${breakpoint.device.phone} {
    padding: 0rem ${defaultFontSize};
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: left;

  @media screen and ${breakpoint.device.tab_land} {
    font-size: 3.5rem;
  }
  @media screen and ${breakpoint.device.tab_port} {
    font-size: 2.8rem;
    text-align: center;
  }
  @media screen and ${breakpoint.device.tab_port_sm} {
    font-size: 2.3rem;
    text-align: center;
  }
  @media screen and ${breakpoint.device.phone} {
    font-size: 2.3rem;
    line-height: 1.5;
  }
  @media screen and ${breakpoint.device.phone_xs} {
    font-size: 2rem;
  }
`;

export const ColorSpan = styled.span`
  background-image: linear-gradient(135deg,#02aab0,#00cdac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`