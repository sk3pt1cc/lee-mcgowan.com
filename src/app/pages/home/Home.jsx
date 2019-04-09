import React, { useState, useEffect } from "react";

import { get } from '../../services/http';
import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";
import PostDetail from "../../components/post-detail";
import Button from "../../components/styled/ button";

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [monthyear, setMonthYear] = useState('03/19');
  const [posts, setPosts] = useState([]);

  // Empty array param means this will only run if the return value changes.
  useEffect(() => {
    get(`posts?monthyear=${monthyear}`).then((response) => {
      console.log(response);
      setPosts(response.data.Items);
    })
  }, [])

  return (
    !selectedPost ? (
        <HomeWrapper>
        <section>
          <Container>
            { posts.length ? <Blog setSelectedPost={setSelectedPost} posts={posts} /> : <p>There are no posts to show :(</p> }
          </Container>
        </section>
        <section>
          Hello
        </section>
      </HomeWrapper>
  ) : (
    <PostDetail post={selectedPost} clearSelectedPost={() => setSelectedPost(null)} />
  ));
};

export default Home;
