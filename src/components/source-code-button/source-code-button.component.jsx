import React from "react";

// styles
import { SrcButtonContainer, Gutter } from "./source-code-button.style";

const SrcButton = ({ sourceLink, frontendCode, backendCode }) => (
	<SrcButtonContainer>
		{sourceLink ? (
			<Gutter>
				<a href={sourceLink} rel='noreferrer' target='_blank'>
					Source Code
				</a>
			</Gutter>
		) : (
			<Gutter>
				<a href={frontendCode} rel='noreferrer' target='_blank'>
					Frontend Code
				</a>
				<a href={backendCode} rel='noreferrer' target='_blank'>
					Backend Code
				</a>
			</Gutter>
		)}
	</SrcButtonContainer>
);

export default SrcButton;