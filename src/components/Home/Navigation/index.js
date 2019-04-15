import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import Hamburger from '../Hamburger';

import {
  NavigationWrapper,
  NavigationLogo,
  NavigationNav,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Container
} from './style';

const Navigation = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const windowHeight = window.innerHeight - 60;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollpos(currentScrollPos);
  };

  const scrollToElement = element => {
    if (element === 'Home') {
      scroller.scrollTo(element, {
        duration: 1500,
        smooth: true
      });
    }
    if (element === 'Blog') {
      scroller.scrollTo(element, {
        duration: 1500,
        smooth: true,
        offset: window.innerWidth > 1300 ? -60 : -52.8
      });
    }
    if (element === 'Services') {
      scroller.scrollTo(element, {
        duration: 1500,
        smooth: true,
        offset: -50
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
    <NavigationWrapper offset={prevScrollpos} value={windowHeight}>
      <Container offset={prevScrollpos} value={windowHeight}>
        <NavigationLogo offset={prevScrollpos} value={windowHeight}>
          Sensation
        </NavigationLogo>
        <NavigationNav offset={prevScrollpos} value={windowHeight}>
          <NavigationList>
            <NavigationItem onClick={() => scrollToElement('Home')}>
              <NavigationLink offset={prevScrollpos}>Home</NavigationLink>
            </NavigationItem>
            <NavigationItem onClick={() => scrollToElement('Menu')}>
              <NavigationLink offset={prevScrollpos}>Menu</NavigationLink>
            </NavigationItem>
            <NavigationItem onClick={() => scrollToElement('Gallery')}>
              <NavigationLink offset={prevScrollpos}>Gallery</NavigationLink>
            </NavigationItem>
            <NavigationItem onClick={() => scrollToElement('Blog')}>
              <NavigationLink offset={prevScrollpos}>Blog</NavigationLink>
            </NavigationItem>
            <NavigationItem onClick={() => scrollToElement('Testimonials')}>
              <NavigationLink offset={prevScrollpos}>
                Testimonials
              </NavigationLink>
            </NavigationItem>
            <NavigationItem onClick={() => scrollToElement('Services')}>
              <NavigationLink offset={prevScrollpos}>Services</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </NavigationNav>
        <Hamburger offset={prevScrollpos} value={windowHeight} />
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;
