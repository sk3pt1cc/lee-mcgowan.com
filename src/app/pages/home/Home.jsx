import React, { useState, useEffect } from "react";
import rp from 'request-promise';

import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";
import PostDetail from "../../components/post-detail";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    rp('/.netlify/functions/test').then((data) => {
      console.log(data);
      console.log('hahahaha');
    });
  });

  return (
    !selectedPost ? (
      <HomeWrapper>
      <section>
        <Container>
          <AboutMe />
        </Container>
      </section>
      <section>
        <Container>
          <Blog setSelectedPost={setSelectedPost} posts={posts} />
        </Container>
      </section>
    </HomeWrapper>
  ) : (
    <PostDetail post={selectedPost} clearSelectedPost={() => setSelectedPost(null)} />
  ));
};

export default Home;
