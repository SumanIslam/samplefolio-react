import styled from "styled-components";
import { whiteColor } from "../../utils/variable";
import breakpoint from "../../utils/breakpoint";

export const EducationSectionContainer = styled.section`
  background-color: ${whiteColor};
  padding: 2rem 0;
`;

export const TimelineContainer = styled.div`
  height: 100%;
  width: 100;
  margin-left: 18rem;

  @media screen and ${breakpoint.device.tab_land} {
    margin-left: 10rem;
  }
  @media screen and ${breakpoint.device.tab_port} {
    margin-left: 5rem;
  }
  @media screen and ${breakpoint.device.tab_port_sm} {
    margin-left: 3rem;
  }
  @media screen and ${breakpoint.device.phone} {
    margin-left: 1rem;
  }
  @media screen and ${breakpoint.device.phone_sm} {
    margin-left: 0.5rem;
  }

  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.05rem;
  }
  div {
    font-size: 1.1rem;
  }
`;