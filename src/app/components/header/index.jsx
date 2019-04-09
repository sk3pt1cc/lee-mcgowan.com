import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import Container from '../styled/container';

const Header = () => (
  <HeaderWrapper>
    <div className="headline">
      <h1>Lee McGowan | Programmer, Writer, Aspiring Stoic</h1>
    </div>
    <div className="black-box" />
  </HeaderWrapper>
);

export default Header;
