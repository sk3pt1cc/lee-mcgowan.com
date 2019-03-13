import React from "react";
import { SocialIcon } from 'react-social-icons';
import SocialsWrapper from "./SocialsWrapper";
import Container from "../styled/container";
import SocialIconWrapper from "./SocialIconWrapper";

const urls = [
  "https://twitter.com/_5krifa",
  "https://www.instagram.com/sk3pt1cc/",
  "https://www.facebook.com/Lee.mcgowan.1994",
  "https://github.com/sk3pt1cc"
];

const Socials = () => (
  <SocialsWrapper>
    <Container>
      {urls.map(url => (
        <SocialIconWrapper key={url}>
          <SocialIcon url={url} style={{ width: 25, height: 25 }} />
        </SocialIconWrapper>
      ))}
    </Container>
  </SocialsWrapper>
);

export default Socials;
