import React from 'react';
import { scroller } from 'react-scroll';
import Navigation from './Navigation';

import {
  Header,
  HeadingPrimary,
  MainHeading,
  SubHeading,
  Wrapper,
  Button,
  ButtonGhost
} from './style';

const Home = () => {
  const scrollToElement = element => {
    if (element === 'Footer') {
      scroller.scrollTo(element, {
        duration: 2000,
        smooth: true
      });
    } else {
      scroller.scrollTo(element, {
        duration: 1500,
        smooth: true,
        offset: -60
      });
    }
  };

  return (
    <Header>
      <Navigation />
      <HeadingPrimary>
        <MainHeading>Best place for family &#38; friends</MainHeading>
        <SubHeading>with delicious &#38; healthy food</SubHeading>
      </HeadingPrimary>
      <Wrapper>
        <Button onClick={() => scrollToElement('Reservation')}>book now</Button>
        <ButtonGhost onClick={() => scrollToElement('Footer')}>
          contact us
        </ButtonGhost>
      </Wrapper>
    </Header>
  );
};

export default Home;
