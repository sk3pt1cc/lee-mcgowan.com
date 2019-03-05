import React from "react";
import Container from "../Container/Container";
import TextInputWrapper from "../TextInputWrapper";
import ContactMeWrapper from "./ContactMeWrapper";

const ContactMe = () => (
  <ContactMeWrapper>
    <Container>
      <h3>Contact Me</h3>
      <form>
        <TextInputWrapper>
          <input id="name" placeholder="Enter your name" />
        </TextInputWrapper>
        <TextInputWrapper>
          <input id="email" placeholder="Enter your email address" />
        </TextInputWrapper>
        <TextInputWrapper>
          <textarea placeholder="Enter your message" rows={10} />
        </TextInputWrapper>
      </form>
    </Container>
  </ContactMeWrapper>
);

export default ContactMe;
