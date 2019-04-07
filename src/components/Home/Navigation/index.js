import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

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
        offset: -130
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
    <NavigationWrapper offset={prevScrollpos}>
      <Container offset={prevScrollpos}>
        <NavigationLogo offset={prevScrollpos}>Sensation</NavigationLogo>
        <NavigationNav offset={prevScrollpos}>
          <NavigationList>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Home')}
                offset={prevScrollpos}
              >
                Home
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Menu')}
                offset={prevScrollpos}
              >
                Menu
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Gallery')}
                offset={prevScrollpos}
              >
                Gallery
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Blog')}
                offset={prevScrollpos}
              >
                Blog
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Testimonials')}
                offset={prevScrollpos}
              >
                Testimonials
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                onClick={() => scrollToElement('Services')}
                offset={prevScrollpos}
              >
                Services
              </NavigationLink>
            </NavigationItem>
          </NavigationList>
        </NavigationNav>
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;
