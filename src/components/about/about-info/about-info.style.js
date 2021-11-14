import styled from "styled-components";
import breakpoint from "../../../styles/breakpoint";
import { whiteColor } from "../../../styles/variable";

export const AboutContentWrapperInfoText = styled.p`
    text-align: left;
    color: ${whiteColor};
    font-size: 1.1rem;
    font-family: Montserrat,sans-serif;

    @media screen and ${breakpoint.device.tab_port} {
      text-align: left;
    }
    @media screen and ${breakpoint.device.tab_port_sm} {
      text-align: center;
    }
`;