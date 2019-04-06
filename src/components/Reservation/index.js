import React from 'react';

import {
  Wrapper,
  ReservationCard,
  MainHeading,
  SubHeading,
  Opening,
  Container,
  Form,
  Button,
  OpeningWrapper
} from './style';

const Reservation = () => {
  const handleClick = event => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Container>
        <ReservationCard>
          <MainHeading>Opening Hours</MainHeading>
          <SubHeading>Open for Special Occasions</SubHeading>
          <img src="/images/clock.png" alt="clock" />
          <OpeningWrapper>
            <Opening>
              Monday-Thursday <span>08AM-10PM</span>
            </Opening>
            <Opening>
              Friday-Saturday <span>10AM-11:30PM</span>
            </Opening>
            <Opening>
              Sunday <span>1PM-10PM</span>
            </Opening>
          </OpeningWrapper>
        </ReservationCard>
        <Form>
          <MainHeading>Reservation</MainHeading>
          <SubHeading sub>We Are Open All Day</SubHeading>
          <input type="text" placeholder="Choose a Date" id="first" />
          <input type="text" placeholder="Choose a Time" />
          <input type="text" placeholder="1 People" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <Button onClick={handleClick}>book a table</Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Reservation;
