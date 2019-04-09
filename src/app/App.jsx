import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home/Home';
import Auth from './pages/auth';
import CreatePost from './pages/create-post';

const App = () => {
  const [isAuthorised, setIsAuthorised] = useState(true);
  return (
      <BrowserRouter>
        <Layout isAuthorised={isAuthorised}>
        <Switch>
          <Route path="/" exact>
            <Home isAuthorised={isAuthorised} />
          </Route>
          <Route
            path="/auth"
            exact
          >
            <Auth
              isAuthorised={isAuthorised}
              setIsAuthorised={setIsAuthorised}
            />
          </Route>
          <Route path='/post/create' exact>
            <CreatePost />
          </Route>
        </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;