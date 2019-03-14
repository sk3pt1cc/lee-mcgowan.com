import React from "react";
import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";

const Home = () => (
  <HomeWrapper>
    <section>
      <Container>
        <AboutMe />
      </Container>
    </section>
    <section>
      <Container>
        <Blog />
      </Container>
    </section>
  </HomeWrapper>
);

export default Home;
