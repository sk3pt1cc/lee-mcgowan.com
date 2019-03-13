import React from 'react';
import Container from '../styled/container';
import LayoutWrapper from './LayoutWrapper';
import Header from '../header';
import Socials from '../socials';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Socials />
    <Container>
      {children}
    </Container>
  </LayoutWrapper>
);

export default Layout;
