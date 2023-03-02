import React from "react";

// components
import Button from '../../button/button.component';
import SrcButton from '../../source-code-button/source-code-button.component';
import Badge from '../../badge/badge.component';

// styles
import { TextContentTitle, TextContentWrapper, ButtonContainer, BadgeContainer } from "./text-content.style";


const TextContent = ({
	title,
	description1,
	description2,
	stack,
	liveLink,
	sourceLink,
  frontendCode,
  backendCode
}) => (
	<>
		<TextContentTitle>{title}</TextContentTitle>
		<TextContentWrapper>
			<div>
				<p className='mb-1 mt-1'>{description1}</p>
				<p className='mb-4'>{description2}</p>
			</div>
			<BadgeContainer>
				{stack.map((title) => (
					<Badge title={title} />
				))}
			</BadgeContainer>
			<ButtonContainer>
				<Button primary text='see Live' link={liveLink} />
				<SrcButton sourceLink={sourceLink} frontendCode={frontendCode} backendCode={backendCode} />
			</ButtonContainer>
		</TextContentWrapper>
	</>
);

export default TextContent;
