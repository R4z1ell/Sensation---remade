import React from 'react';

import {
  Header,
  Navigation,
  NavigationLogo,
  NavigationNav,
  NavigationList,
  NavigationItem,
  NavigationLink,
  HeadingPrimary,
  MainHeading,
  SubHeading,
  Wrapper,
  Button,
  ButtonGhost
} from './style';

const Home = () => {
  return (
    <Header>
      <Navigation>
        <NavigationLogo>Sensation</NavigationLogo>
        <NavigationNav>
          <NavigationList>
            <NavigationItem>
              <NavigationLink>Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Menu</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Gallery</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Blog</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Testimonials</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>Services</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </NavigationNav>
      </Navigation>
      <HeadingPrimary>
        <MainHeading>Best place for family &#38; friends</MainHeading>
        <SubHeading>with delicious &#38; healthy food</SubHeading>
      </HeadingPrimary>
      <Wrapper>
        <Button>book now</Button>
        <ButtonGhost>contact us</ButtonGhost>
      </Wrapper>
    </Header>
  );
};

export default Home;
