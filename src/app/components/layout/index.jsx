import React from 'react';
import Container from '../styled/container';
import LayoutWrapper from './LayoutWrapper';
import Header from '../header';
import Socials from '../socials';
import Button from '../styled/ button';
import AdminPanel from '../admin-panel';

const Layout = ({ children, isAuthorised }) => (
  <LayoutWrapper>
    <Header />
    {children}
  </LayoutWrapper>
);

export default Layout;
