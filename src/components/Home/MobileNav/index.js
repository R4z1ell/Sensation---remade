import React, { useContext } from 'react';
import { scroller } from 'react-scroll';
import MobileNavContext from '../../../shared/MobileNavContext';

import {
  Wrapper,
  MainHeader,
  List,
  Item,
  Link,
  Phone,
  Address,
  Gallery,
  Image,
  Title
} from './style';

const MobileNav = () => {
  const mobileNav = useContext(MobileNavContext);

  const scrollToElement = element => {
    if (element === 'Home') {
      mobileNav.toggleSideNav();
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 500,
        smooth: true
      });
    }
    if (element === 'Blog') {
      mobileNav.toggleSideNav();
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 500,
        smooth: true,
        offset: window.innerWidth > 1300 ? -60 : -52.8
      });
    }
    if (element === 'Services') {
      mobileNav.toggleSideNav();
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 500,
        smooth: true,
        offset: -50
      });
    } else {
      mobileNav.toggleSideNav();
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 500,
        smooth: true,
        offset: window.innerWidth > 1300 ? -60 : -52.8
      });
    }
  };

  return (
    <Wrapper nav={mobileNav.mobileNavStatus}>
      <MainHeader>Sensation</MainHeader>
      <List>
        <Item onClick={() => scrollToElement('Home')}>
          <Link>Home</Link>
        </Item>
        <Item onClick={() => scrollToElement('Menu')}>
          <Link>Menu</Link>
        </Item>
        <Item onClick={() => scrollToElement('Gallery')}>
          <Link>Gallery</Link>
        </Item>
        <Item onClick={() => scrollToElement('Blog')}>
          <Link>Blog</Link>
        </Item>
        <Item onClick={() => scrollToElement('Testimonials')}>
          <Link>Testimonials</Link>
        </Item>
        <Item onClick={() => scrollToElement('Services')}>
          <Link>Services</Link>
        </Item>
      </List>
      <Gallery>
        <Title>gallery</Title>
        <Image src="images/gallery-1.jpg" />
        <Image src="images/gallery-2.jpg" />
        <Image src="images/gallery-3.jpg" />
        <Image src="images/gallery-4.jpg" />
      </Gallery>
      <Phone>Phone: +065429932223</Phone>
      <Address>Address: Via Del Corso, 134 - Rome</Address>
    </Wrapper>
  );
};

export default MobileNav;
