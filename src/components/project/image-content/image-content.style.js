import styled from "styled-components";

import breakpoint from "../../../utils/breakpoint";

export const ImageContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  cursor: pointer;

  @media screen and ${breakpoint.device.tab_land} {
    width: 100%;
    margin: 0;
  }

  & .thumbnail {
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.5s box-shadow,
      0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    media screen and ${breakpoint.device.phone} {
      border: 1px solid #d2d2d2;
      box-shadow: none;
      margin-bottom: 2rem;
    }
  }
`;