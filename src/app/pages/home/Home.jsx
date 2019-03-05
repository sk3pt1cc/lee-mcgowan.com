import React from 'react';
import HomeWrapper from './HomeWrapper';
import AboutMePreview from '../../components/AboutMePreview';
import BigBanner from '../../components/BigBanner';
import ContactMe from '../../components/ContactMe';

const Home = () => (
  <HomeWrapper>
    <BigBanner />
    <AboutMePreview />
    <ContactMe />
  </HomeWrapper>
);

export default Home;