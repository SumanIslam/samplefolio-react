import styled from "styled-components";
import { whiteColor, defaultFontSize, darkColor } from '../../utils/variable';

export const FooterContainer = styled.section`
  background-color: ${darkColor};
  color: ${whiteColor};
  padding: 2rem;


  a.back-to-top {
    text-align: center;
  }

  .back-to-top i {
    color: ${whiteColor};
    margin: 1rem 0 ${defaultFontSize};
    transition: all 0.2s ease-in;
    text-align: center;

    &:hover {
      transform: translateY(-2px);
    }
  }

  & hr {
    margin-top: 0.6rem;
    margin-bottom: 1rem;
    margin-left:20% !important;
    margin-right:20% !important;
    border: 0;
    width: 60%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  & .footer-text {
    font-size: 1.1rem;
    color: ${whiteColor}
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${whiteColor};
    font-size: 1.875rem;
    width: 3.125rem;
    height: 3.125rem;
    margin: ${defaultFontSize} ${defaultFontSize};
    transition: all 0.2s ease-in;
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;