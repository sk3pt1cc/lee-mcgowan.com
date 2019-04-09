import React from "react";
import PostWrapper from "./PostWrapper";
import TextPanel from "../../styled/text-panel";
import Button from "../../styled/ button";

const Post = ({ title, preview, readMore }) => (
  <PostWrapper>
    <TextPanel>
      <h1>{title}</h1>
      <small>Created on 21/01/2012</small>
      <p>{preview}</p>
      <Button onClick={readMore}>
        Read More
      </Button>
    </TextPanel>
  </PostWrapper>
);

export default Post;
