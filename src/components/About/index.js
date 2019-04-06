import React from 'react';

import {
  AboutUs,
  HeadingSecondary,
  MainHeading,
  SubHeading,
  Story,
  Wrapper,
  WrapperImages,
  ImagesContainer
} from './style';

const About = () => {
  return (
    <AboutUs>
      <Wrapper>
        <HeadingSecondary>
          <MainHeading>About Us</MainHeading>
          <SubHeading>Discover Our Story</SubHeading>
        </HeadingSecondary>
        <Story>
          Sensation is one of the oldest restaurant in Rome that’s been active
          since 1899 when our Enzo Cartieri and his best friend Luca Malfora
          built up this place from the ground up. Situated in a daydream
          scenario right in front of Trevi Fountain, inside Rome’s hearth
          itself. Nowadays is still one of the reference point for the
          indisputable Italian cuisine.
        </Story>
      </Wrapper>
      <WrapperImages>
        <img src="/images/steak.jpg" alt="steak" />
        <ImagesContainer>
          <img src="/images/dessert-1.png" alt="dessert-1" />
          <img src="/images/dessert-2.png" alt="dessert-2" />
        </ImagesContainer>
      </WrapperImages>
    </AboutUs>
  );
};

export default About;
