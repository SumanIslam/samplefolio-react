import React from "react";

// component
import SectionTitle from '../section-title/section-title.component'
import Button from "../button/button.component";

// styles
import { ContactSectionContainer, ContentWrapper, ContentWrapperText } from "./contact.style";

const Contact = () => (
  <ContactSectionContainer>
    <div class="container">
      <SectionTitle title="contact" />
      <ContentWrapper>
        <ContentWrapperText>
          Would you like to work with me? Awesome!
        </ContentWrapperText>
        <Button text="Let's Talk" link="mailto:sumunahmed1416@gmail.com" />
      </ContentWrapper>
    </div>
  </ContactSectionContainer>
);

export default Contact;