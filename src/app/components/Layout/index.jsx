import React from 'react';
import Header from './Header';
import LayoutWrapper from './LayoutWrapper';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header title="leemcgowan.com" />
    {children}
  </LayoutWrapper>
);

export default Layout;
