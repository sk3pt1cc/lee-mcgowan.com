import React, { useState, useEffect } from "react";
import sheetrock from "sheetrock";

import HomeWrapper from "./HomeWrapper";
import AboutMe from "../../components/about-me";
import Container from "../../components/styled/container";
import Blog from "../../components/blog";
import PostDetail from "../../components/post-detail";

const parseSheetsContent = response => {
  const { rows } = response;
  const posts = rows.map((row, idx) => {
    const output = {};
    const { labels, cellsArray } = row;

    labels.forEach((label, idx) => {
      output[label.toLowerCase()] = cellsArray[idx];
    });

    return output;
  });

  return posts;
};

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length <= 0) {
      sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1LvEMfH1CGgj3UaedMRrQbDUCOdFmOkUmXLSbrpsaSrg/edit#gid=0",
        callback: (err, opt, response) => {
          const res = response;
          const posts = parseSheetsContent(res);
          setPosts(posts.splice(1));
        },
      });
    }
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
