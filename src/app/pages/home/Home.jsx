import React, { useState } from "react";
import axios from 'axios';

import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";
import PostDetail from "../../components/post-detail";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [initialRequestMade, setInitialRequestMade] = useState(false);

  if (!initialRequestMade) {
    axios.get('/.netlify/functions/get-posts').then((data) => {
      setPosts(data);
      setInitialRequestMade(true);
    })
  }

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
