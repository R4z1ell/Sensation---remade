import React from 'react';

import {
  SectionServices,
  MainHeading,
  SubHeading,
  ServiceCard,
  Image,
  Title,
  Text,
  Container
} from './style';

const Services = () => {
  return (
    <SectionServices>
      <MainHeading>What we offer</MainHeading>
      <SubHeading>Our Great Services</SubHeading>
      <Container>
        <ServiceCard>
          <Image src="images/calendar-two.png" />
          <Title>Opened 24/7</Title>
          <Text>
            Sensation Restaurant is open 24/7 to satisfy all customers!
          </Text>
        </ServiceCard>
        <ServiceCard>
          <Image src="images/dinner.png" />
          <Title>Special Menu</Title>
          <Text>
            Ask for our daily specials including the vegetarian dish of the day
          </Text>
        </ServiceCard>
        <ServiceCard>
          <Image src="images/delivery.png" />
          <Title>Home Delivery</Title>
          <Text>
            Everyday essentials delivered on time with a schedule you set
          </Text>
        </ServiceCard>
      </Container>
    </SectionServices>
  );
};

export default Services;
