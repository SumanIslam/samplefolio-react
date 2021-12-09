import styled from "styled-components";
import breakpoint from "../../../utils/breakpoint";
import { midFontSize } from "../../../utils/variable";

export const TextContentWrapper = styled.div`
  text-align: left;

  @media screen and ${breakpoint.device.phone} {
    margin-bottom: 1.5625rem !important;
  }
  @media screen and ${breakpoint.device.tab_land} {
    margin-bottom: 3rem;
  }
`;

export const TextContentTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 1.125rem;
  font-size: ${midFontSize};

  @media screen and ${breakpoint.device.phone} {
    font-size: 1.25rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;