import React from "react";
import PostWrapper from "./PostWrapper";
import TextPanel from "../../styled/text-panel";
import Button from "../../styled/ button";

const truncate = text => text.length < 300 ? text : `${text.substring(0, 297)}...`;

const Post = ({ title, content }) => (
  <PostWrapper>
    <TextPanel>
      <h3>{title}</h3>
      <hr />
      <p>
        {truncate(content)}
      </p>
      <Button>
        Read More
      </Button>
    </TextPanel>
  </PostWrapper>
);

export default Post;
