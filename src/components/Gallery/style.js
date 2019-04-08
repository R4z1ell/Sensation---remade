import styled from 'styled-components';

const SectionGallery = styled.section`
  background-color: #232323;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 6rem;
  font-family: 'Tangerine';
  text-align: center;
  padding: 4rem 0;
`;

const FigureWrapper = styled.figure`
  display: flex;
`;

const FigCaption = styled.figcaption`
  position: absolute;
  top: 80%;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0;
  transition: all 0.5s;
`;

const Figure = styled.figure`
  position: relative;
  width: calc(100vw / 4);
  cursor: pointer;
  overflow: hidden;

  &:hover:before {
    opacity: 1;
  }

  &:hover ${FigCaption} {
    opacity: 1;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: opacity 0.5s ease-out;
    background: linear-gradient(to bottom, transparent 0%, #0c0c0c 100%);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Flex = styled.span`
  display: flex;
  justify-content: center;
`;

export {
  SectionGallery,
  Title,
  FigureWrapper,
  FigCaption,
  Figure,
  Image,
  Flex
};
