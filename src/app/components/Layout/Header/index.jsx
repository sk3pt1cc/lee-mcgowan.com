import React from 'react';
import HeaderWrapper from './HeaderWrapper';

const Header = ({ title }) => (
  <HeaderWrapper>
    <h1>{ title }</h1>
  </HeaderWrapper>
);

export default Header;
