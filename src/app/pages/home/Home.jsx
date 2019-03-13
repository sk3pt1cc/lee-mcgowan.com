import React from "react";
import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";

const Home = () => (
  <HomeWrapper>
    <section />
    <section>
      <Container>
        <AboutMe />
      </Container>
    </section>
  </HomeWrapper>
);

export default Home;
