import React from 'react';
import Container from '../../components/Container/Container';
import HomeWrapper from './HomeWrapper';

const Home = () => (
  <HomeWrapper>
    <div className="content">
      <div className="img-container">
        <img src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/10988955_486529398199906_2189965936384943950_o.jpg?_nc_cat=105&_nc_ht=scontent-lht6-1.xx&oh=55dcfa2a741186fe4b420a8a344e42e3&oe=5CDB2E50" />
      </div>
      <div className="text-container">
        <p>Hi, I'm Lee, a software developer working for the BBC in Glasgow, Scotland.</p>
        <p>This site is currently being created.</p>
      </div>
    </div>
  </HomeWrapper>
);

export default Home;