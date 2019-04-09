import React from 'react';
import PostTitlesWrapper from './PostTitlesWrapper';
import PostTitle from './post-title';

const PostTitles = ({ posts, setSelectedPost, selectedPost }) => (
  <PostTitlesWrapper>
    {posts.map((post, idx) => (
      <PostTitle
        setSelectedPost={setSelectedPost}
        selected={post.id === selectedPost}
        {...post}
      />
    ))}
  </PostTitlesWrapper>
)

export default PostTitles;