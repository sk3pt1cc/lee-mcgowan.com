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
      <div className="content">
        <div className="image">
          <img src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/20953509_1680676471974088_8669894212115247644_n.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=6cb97be8d83d08083c99174e57012a33&oe=5D1AC451" />
        </div>
        <div className="text">
          I'm a software developer from Glasgow, UK who specialises in frontend
          projects with ReactJS. I also love to write fiction and might be posting some of that here.
        </div>
      </div>
    </TextPanel>
  </AboutMeWrapper>
);

export default AboutMe;
