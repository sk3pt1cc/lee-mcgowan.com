import React from "react";
import Markdown from 'markdown-to-jsx';
import PostWrapper from "./PostWrapper";
import Container from "../../styled/container";

const Post = ({ title, content }) => (
  <PostWrapper>
    <Container>
      <Markdown>
        {content}
      </Markdown>
    </Container>
  </PostWrapper>
);

export default Post;
