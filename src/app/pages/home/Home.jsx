import React, { useState, useEffect } from "react";

import { get } from '../../services/http';
import HomeWrapper from "./HomeWrapper";
import PostTitles from "../../components/blog/post-titles";
import content from './content';
import Post from "../../components/blog/post";

const thePosts = [
  {
    id: 1,
    title: `What's the story mornin' glory?`,
    createdOn: `09/09/18`,
    content,
  },
  {
    id: 2,
    title: `What's the plan Mr. Man?`,
    createdOn: `01/03/17`,
    content,
  },
  {
    id: 3,
    title: `What does it mean to be a Stoic?`,
    createdOn: `07/10/16`,
    content,
  },
  {
    id: 4,
    title: `Why do I only write one blog post per year?`,
    createdOn: `01/01/15`,
    content,
  },
  {
    id: 5,
    title: `Once I called you brother.`,
    createdOn: `00/00/00`,
    content,
  },
  {
    id: 6,
    title: `Once I called you brother.`,
    createdOn: `00/00/00`,
    content,
  },
  {
    id: 7,
    title: `Once I called you brother.`,
    createdOn: `00/00/00`,
    content,
  },
  {
    id: 8,
    title: `Once I called you brother.`,
    createdOn: `00/00/00`,
    content,
  }
]

const Home = () => {
  const [monthyear, setMonthYear] = useState('03/19');
  const [posts, setPosts] = useState(thePosts);
  const [selectedPost, setSelectedPost] = useState(thePosts[0].id);

  // // Empty array param means this will only run if the return value changes.
  // useEffect(() => {
  //   get(`posts?monthyear=${monthyear}`).then((response) => {
  //     console.log(response);
  //     setPosts(response.data.Items);
  //   })
  // }, [])

  return (
    <HomeWrapper>
      <section className="home__blog-titles">
        <PostTitles
          posts={posts}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      </section>
      <section className="home__post-detail">
          <Post
            {...posts.find(post => post.id === selectedPost)}
          />
      </section>
    </HomeWrapper>
  );
};

export default Home;
