import styled from "styled-components";
import { bigFontSize } from "../../styles/variable";
import breakpoint from "../../styles/breakpoint";

export const TitleContainer = styled.h1`
  margin: 0;
  margin-bottom: 2.81rem;
  font-size: ${bigFontSize};
  font-family: Montserrat,sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  @media screen and ${breakpoint.device.phone} {
    font-size: 1.75rem;
  }
`