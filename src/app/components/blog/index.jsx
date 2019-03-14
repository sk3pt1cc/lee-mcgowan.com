import React from "react";
import BlogWrapper from "./BlogWrapper";
import Post from "./post";

const Blog = ({ setSelectedPost, posts }) => (
  <BlogWrapper>
    {posts.map(post => (
      <Post key={post.title} {...post} readMore={() => setSelectedPost(post)} />
    ))}
  </BlogWrapper>
);

export default Blog;
