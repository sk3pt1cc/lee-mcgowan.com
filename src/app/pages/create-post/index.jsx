import React, { useState } from 'react';
import uuid from 'uuid';
import Button from '../../components/styled/ button';
import Container from '../../components/styled/container';
import Form from '../../components/styled/form/Form';
import Err from '../../components/styled/error';
import { post } from '../../services/http';
import Info from '../../components/styled/info';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [preview, setPreview] = useState('');
  const [content, setContent] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    const myPost = {
      id: uuid(),
      title,
      tags: tags.split(','),
      preview,
      content,
      monthyear: '03/19'
    };
    try {
      await post('posts', JSON.stringify({ post: myPost }));
      setSuccess('Post submitted successfully.');
    } catch (e) {
      setErr('There was an error submitting your post. Please try again.');
    }
  }

  return (
    <Container>
      {err && <Err>{err}</Err>}
      {success && <Info>{info}</Info>}
      <Form onSubmit={submitPost}>
        <input 
          className="big-input"
          placeholder="Post Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter post preview"
          value={preview}
          onChange={e => setPreview(e.target.value)}
        />
        <input
          placeholder="Enter tags in csv format (story,tech,x)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <textarea
          placeholder="Enter post content"
          rows="15"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button>
          Create
        </Button>
      </Form>
    </Container>
  )
};

export default CreatePost;