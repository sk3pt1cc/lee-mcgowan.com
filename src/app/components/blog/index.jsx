import React, { useState, useEffect } from "react";
import sheetrock from "sheetrock";
import BlogWrapper from "./BlogWrapper";
import Post from "./post";

const parseSheetsContent = (response) => {
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

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length <= 0) {
      sheetrock({
        url: process.env.SHEET_URL,
        callback: (err, opt, response) => {
          const res = response;
          const posts = parseSheetsContent(res);
          setPosts(posts.splice(1));
        },
      });
    }
  });

  return (
    <BlogWrapper>
      {posts.map(post => (
        <Post key={post.title} {...post} />
      ))}
    </BlogWrapper>
  );
};

export default Blog;
