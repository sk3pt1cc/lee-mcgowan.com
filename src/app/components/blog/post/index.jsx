import React from "react";
import PostWrapper from "./PostWrapper";
import TextPanel from "../../styled/text-panel";
import Button from "../../styled/ button";

const Post = ({ title, preview, readMore }) => (
  <PostWrapper>
    <TextPanel>
      <h3>{title}</h3>
      <hr />
      <p>
        {preview}
      </p>
      <Button onClick={readMore}>
        Read More
      </Button>
    </TextPanel>
  </PostWrapper>
);

export default Post;
