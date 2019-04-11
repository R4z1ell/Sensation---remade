import React from 'react';
import { scroller } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
        offset: window.innerWidth > 1300 ? -60 : -52.8
      });
    }
  };

  return (
    <Header>
      <Navigation />
      <HeadingPrimary>
        <MainHeading>
          <Zoom top cascade>
            Best place for family &#38; friends
          </Zoom>
        </MainHeading>
        <SubHeading>
          <Fade left cascade>
            with delicious &#38; healthy food
          </Fade>
        </SubHeading>
      </HeadingPrimary>
      <Wrapper>
        <Fade bottom big>
          <Button onClick={() => scrollToElement('Reservation')}>
            book now
          </Button>
          <ButtonGhost onClick={() => scrollToElement('Footer')}>
            contact us
          </ButtonGhost>
        </Fade>
      </Wrapper>
    </Header>
  );
};

export default Home;
