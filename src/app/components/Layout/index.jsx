import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header title="leemcgowan.com" />
    {children}
  </div>
);

export default Layout;
