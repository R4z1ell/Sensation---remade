import React from 'react';

import {
  SectionMenu,
  ButtonMenu,
  Button,
  PageMenu,
  Page,
  CardsWrapper
} from './style';
import CardMenu from './CardMenu';

const Menu = () => {
  return (
    <SectionMenu>
      <ButtonMenu>
        <Button>breakfast</Button>
        <Button>lunch</Button>
        <Button>dinner</Button>
      </ButtonMenu>
      <CardsWrapper>
        <CardMenu
          heading="Salad with lamb and raspberries"
          price="$23"
          img="/images/salad.jpg"
        />
        <CardMenu
          heading="Fresh gnocchi with lemon sauce"
          price="$16"
          img="/images/gnocchi.jpg"
        />
        <CardMenu
          heading="Pasta with cheese and herbs"
          price="$21"
          img="/images/pasta.jpg"
        />
        <CardMenu
          heading="Grilled pork chop with potatoes"
          price="$28"
          img="/images/pork.jpg"
        />
        <CardMenu
          heading="Pinot noir glazed salmon"
          price="$45"
          img="/images/pinot.jpg"
        />
        <CardMenu
          heading="Grilled octopus with cream"
          price="$37"
          img="/images/octopus.jpg"
        />
      </CardsWrapper>
      <PageMenu>
        <Page>&#60;</Page>
        <Page>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Page>&#62;</Page>
      </PageMenu>
    </SectionMenu>
  );
};

export default Menu;
