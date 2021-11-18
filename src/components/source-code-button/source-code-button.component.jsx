import React from "react";

// styles
import { SrcButtonContainer } from "./source-code-button.style";

const SrcButton = ({ link }) => (
  <SrcButtonContainer>
    <a href={link} rel="noreferrer" target="_blank">Source Code</a>
  </SrcButtonContainer>
);

export default SrcButton;