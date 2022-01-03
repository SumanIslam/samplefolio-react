import styled from "styled-components";
import breakpoint from "../../../utils/breakpoint";

export const Row = styled.div`
  margin-bottom: 1rem;

  @media screen and ${breakpoint.device.phone} {
    margin-bottom: 2.5rem;
  }
`;