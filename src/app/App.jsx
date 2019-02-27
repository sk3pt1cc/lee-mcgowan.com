import React from 'react';
import ThemeProvider from 'styled-components';
import Layout from './components/Layout';
import Home from './pages/home/Home';

const App = () => (
    <Layout>
      <Home />
    </Layout>
);

export default App;