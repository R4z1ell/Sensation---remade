import React from 'react';

import {
  SectionGallery,
  Title,
  FigureWrapper,
  Figure,
  Image,
  FigCaption,
  Flex
} from './style';

const Gallery = () => {
  return (
    <SectionGallery>
      <Title>Restaurant Gallery</Title>
      <FigureWrapper>
        <Figure>
          <Image src="images/gallery-1.jpg" />
          <Flex>
            <FigCaption>fillet steak</FigCaption>
          </Flex>
        </Figure>
        <Figure>
          <Image src="images/gallery-2.jpg" />
          <Flex>
            <FigCaption>pancake with honey</FigCaption>
          </Flex>
        </Figure>
        <Figure>
          <Image src="images/gallery-3.jpg" />
          <Flex>
            <FigCaption>pancake with cheese</FigCaption>
          </Flex>
        </Figure>
        <Figure>
          <Image src="images/gallery-4.jpg" />
          <Flex>
            <FigCaption>roasted pork</FigCaption>
          </Flex>
        </Figure>
      </FigureWrapper>
    </SectionGallery>
  );
};

export default Gallery;
