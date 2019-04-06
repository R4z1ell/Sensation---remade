import React from 'react';

import {
  SectionTestimonial,
  MainHeading,
  SubHeading,
  Left,
  Right,
  Image,
  Title,
  Text,
  Pagination,
  Page,
  Container,
  Wrapper
} from './style';

const Testimonials = () => {
  return (
    <SectionTestimonial bck="/images/testimonials-bck.jpg">
      <Container>
        <MainHeading>Testimonials</MainHeading>
        <SubHeading>What Our Clients Says</SubHeading>
        <Wrapper>
          <Left>
            <Image src="/images/portrait-1.jpg" />
            <Title>olga landif</Title>
            <Text>
              Pellentesque habitant morbi tristique senectus Vivamus at nisl
              eget ipsum but because occasionally circumstances occur in toil
              and pain can procure him some great pleasure
            </Text>
          </Left>
          <Right>
            <Image src="/images/portrait-2.jpg" />
            <Title>stefan norman</Title>
            <Text>
              Pellentesque habitant morbi tristique senectus Vivamus at nisl
              eget ipsum but because occasionally circumstances occur in toil
              and pain can procure him some great pleasure
            </Text>
          </Right>
        </Wrapper>
        <Pagination>
          <Page />
          <Page />
          <Page />
        </Pagination>
      </Container>
    </SectionTestimonial>
  );
};

export default Testimonials;
