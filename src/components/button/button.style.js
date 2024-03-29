import styled from "styled-components";
import breakpoint from "../../utils/breakpoint";
import { defaultFontSize, whiteColor, primaryColor } from "../../utils/variable";

export const ButtonStyle = styled.div`
  display: flex;
  margin-bottom: 3rem;
  z-index: 1;

  @media screen and ${breakpoint.device.tab_port} {
    justify-content: center;
  }
  
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 0.5rem ${defaultFontSize};
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  color: ${props => props.primary ? primaryColor : whiteColor};
  border: ${props => props.primary ? `2px solid ${primaryColor}` : `2px solid ${whiteColor}`};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${props => props.primary ? primaryColor : whiteColor};
    transform: translateX(-100%);
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
  &:hover::before {
    transform: translateX(0);
  }
  &:hover a, &:hover span {
    z-index: 1;
    color: ${props => props.primary ? whiteColor : primaryColor};
  }

  & a, & span {
    font-size: 1.1rem;
    text-decoration: none;
    z-index: 1;
    cursor:pointer;
    color: ${props => props.primary ? primaryColor : whiteColor};

    &:hover {
      color: ${props => props.primary ? whiteColor : primaryColor};
    }

    @media screen and ${breakpoint.device.phone} {
      font-size: 1rem;
    }
  }
`;