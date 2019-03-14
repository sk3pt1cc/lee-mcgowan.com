import React from "react";
import Button from "../styled/ button";
import TextPanel from "../styled/text-panel";
import Container from "../styled/container";
import PostDetailWrapper from "./PostDetailWrapper";

const PostDetail = ({ post, clearSelectedPost }) => (
  <PostDetailWrapper>
    <Container>
      <h3>{post.title}</h3>
      <hr />
      <TextPanel>
        <div dangerouslySetInnerHTML={{ __html: post.content}} />
      </TextPanel>
      <Button onClick={clearSelectedPost}>Go back</Button>
    </Container>
  </PostDetailWrapper>
);

export default PostDetail;
