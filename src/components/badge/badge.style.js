import styled from "styled-components";
import { primaryColor } from "../../styles/variable";

export const BadgeWrapper = styled.div`
  display: inline-block;
  position: relative;
  color: ${primaryColor};
  padding: 0 0.5rem;
  border: 2px solid ${primaryColor};
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`