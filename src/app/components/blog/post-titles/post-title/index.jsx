import React from 'react';
import PostTitleWrapper from './PostTitleWrapper';
import Container from '../../../styled/container';

const BlogTitle = ({ id, title, createdOn, selected, setSelectedPost }) => (
  <PostTitleWrapper selected={selected}>
    <Container>
      <h2 onClick={() => { setSelectedPost(id) }}>{title}</h2>
      <p>{createdOn}</p>
    </Container>
  </PostTitleWrapper>
);

export default BlogTitle;
