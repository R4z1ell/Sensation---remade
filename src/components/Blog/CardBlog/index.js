import React from 'react';

import {
  CardWrapper,
  Figure,
  FigCaption,
  Shape,
  Image,
  Title,
  Divider,
  Text,
  BottomPart,
  ElementsWrapper,
  Date,
  ReadMore
} from './style';

const CardBlog = props => {
  return (
    <CardWrapper>
      <Figure bck={props.bck}>
        <FigCaption>{props.caption}</FigCaption>
      </Figure>
      <Shape>
        <Image src={props.picture} />
        <Title>{props.title}</Title>
      </Shape>
      <Divider />
      <Text>
        At veri eis et accusamus et iusto odio dignis si ducimus qui blanditiis
        praesentium volup tatum del enti atque
      </Text>
      <BottomPart>
        <ElementsWrapper>
          <Image src="images/calendar.png" />
          <Date>{props.date}</Date>
        </ElementsWrapper>
        <ReadMore>Read More &#62;</ReadMore>
      </BottomPart>
    </CardWrapper>
  );
};

export default CardBlog;
