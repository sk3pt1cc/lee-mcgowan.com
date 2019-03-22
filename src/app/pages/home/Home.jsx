import React, { useState, useEffect } from "react";

import { get } from '../../services/http';
import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";
import PostDetail from "../../components/post-detail";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  // Empty array param means this will only run if the return value changes.
  useEffect(() => {
    get('get-posts').then((response) => {
      setPosts(response.data);
    })
  }, [])

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
          { posts ? <Blog setSelectedPost={setSelectedPost} posts={posts} /> : <p>There are no posts to show :(</p> }
        </Container>
      </section>
    </HomeWrapper>
  ) : (
    <PostDetail post={selectedPost} clearSelectedPost={() => setSelectedPost(null)} />
  ));
};

export default Home;
