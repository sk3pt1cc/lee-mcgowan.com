import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { post } from '../../services/http';
import Container from '../../components/styled/container';
import Form from '../../components/styled/form/Form';
import Err from '../../components/styled/error';

const Auth = ({ isAuthorised, setIsAuthorised, history }) => {
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const authorise = async (event) => {
    event.preventDefault();
    try {
      const response = await post('auth', JSON.stringify({ secret: password }));
      setIsAuthorised(true);
      history.push('/');
    } catch (e) {
      console.log(e);
      setErr('Authentication failed. Please try again.');
      setTimeout(() => setErr(''), 5000);
    }
  }

  return (
    <div>
      {err && <Err>{err}</Err>}
      <Container>
        <h1>Admin Login</h1>
        {!isAuthorised ? (
          <Form onSubmit={authorise}>
            <input
              type="password"
              placeholder="Please enter the admin password."
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Form>
        ) : <p>You are already logged in!</p>}
      </Container>
    </div>
  );
}

export default withRouter(Auth);