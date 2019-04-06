import React from 'react';

import { Card, Heading, Price, Text, OrderLink, Image } from './style';

const CardMenu = props => {
  return (
    <Card>
      <Heading>
        {props.heading}
        <Price>{props.price}</Price>
      </Heading>
      <Text>
        Duis autem vel eum irnure moreon and hendrer essse molestie consemuat
        veam enllum dolorm neugiat nulla facilisis at arrow eros.
      </Text>
      <OrderLink>order now</OrderLink>
      <Image src={props.img} />
    </Card>
  );
};

export default CardMenu;
