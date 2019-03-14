import React from "react";
import Container from "../styled/container";
import AboutMeWrapper from "./AboutMeWrapper";
import TextPanel from "../styled/text-panel";
import Socials from "../socials";

const AboutMe = () => (
  <AboutMeWrapper>
    <TextPanel>
      <h3>About Me</h3>
      <hr />
      <p>
        I'm a software developer from Glasgow, UK who specialises in frontend
        projects with ReactJS. I also love to write fiction and will probably be
        posting some of that here, and maybe some personal ramblings too.
      </p>
    </TextPanel>
  </AboutMeWrapper>
);

export default AboutMe;
