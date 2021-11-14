// component
import { ButtonStyle, ButtonContainer } from "./button.style";

const Button = ({ primary, text }) => (
  <ButtonStyle>
    <ButtonContainer primary={primary}>
      <a href="https://www.fiverr.com/sumunahmed1416?up_rollout=true" target="_blank" rel="noreferrer">{text}</a>
    </ButtonContainer>
  </ButtonStyle>
);

export default Button;