import styled from "styled-components";
import { defaultFontSize, primaryColor } from "../../utils/variable";
import breakpoint from "../../utils/breakpoint";

export const SrcButtonContainer = styled.div`
  display: inline-block;
  padding: 0.5rem ${defaultFontSize};
  height: 40px;
  font-weight: bold;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

  &:hover {
    transform: translateX(2px);
  }

  & a {
    font-size: 1.1rem;
    text-decoration: none;
    z-index: 1;
    cursor:pointer;
    color: ${primaryColor};

    @media screen and ${breakpoint.device.phone} {
      font-size: 1rem;
    }
  }
`