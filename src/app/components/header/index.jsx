import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import Container from '../styled/container';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <hr />
    </Container>
    <Container>
      <h1>Lee McGowan</h1>
      <small>Programmer & Hobbyist Writer</small>
    </Container>
    <Container>
      <hr />
    </Container>
  </HeaderWrapper>
);

export default Header;
