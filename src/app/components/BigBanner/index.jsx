import React from "react";
import { SocialIcon } from "react-social-icons";
import BigBannerWrapper from "./BigBannerWrapper";
import Container from "../Container/Container";

const urls = [
  "https://twitter.com/_5krifa",
  "https://www.instagram.com/sk3pt1cc/",
  "https://www.facebook.com/Lee.mcgowan.1994",
  "https://github.com/sk3pt1cc",
]

const BigBanner = () => (
  <BigBannerWrapper>
    <div className="about-text">
      <Container>
        <h1>Hey, I'm Lee McGowan.</h1>
      </Container>
    </div>
    <div className="contact">
      <Container>
        <div className="socials">
          {urls.map(url => (
            <div key={url}>
              <SocialIcon url={url} style={{ width: 25, height: 25 }} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  </BigBannerWrapper>
);

export default BigBanner;
