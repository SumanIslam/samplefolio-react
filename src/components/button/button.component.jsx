// component
import { ButtonStyle, ButtonContainer } from "./button.style";

const Button = ({ primary, text, link }) => (
  <ButtonStyle>
    <ButtonContainer primary={primary}>
      {
        link[0] === '#' ? (
          <a href={link} rel="noreferrer">{text}</a>
        ): (
          <a href={link} rel="noreferrer" target="_blank">{text}</a>
        )
      }
      
    </ButtonContainer>
  </ButtonStyle>
);

export default Button;