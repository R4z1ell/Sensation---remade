import styled from 'styled-components';
import { device } from '../../../shared/MediaQueries';

const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.bck});
  background-size: cover;
  height: 50%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    transition: opacity 0.3s ease-out;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  }
`;

const FigCaption = styled.figcaption`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin: 0 10%;
  opacity: 0;
  transition: opacity 0.3s ease-out;
`;

const CardWrapper = styled.div`
  position: relative;
  width: calc(120rem / 3 - 2.5%);
  height: 54.6rem;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.4);
  cursor: pointer;

  @media ${device.mobileM} {
    width: calc(120rem / 3.5 - 2.5%);
  }

  &:hover ${Figure}:before {
    opacity: 1;
  }

  &:hover ${FigCaption} {
    opacity: 1;
    z-index: 5;
  }

  @media (max-width: 1120px) {
    &:nth-child(1) {
      justify-self: end;
    }

    &:nth-child(2) {
      justify-self: start;
    }

    &:nth-child(3) {
      justify-self: end;
      transform: translateX(21.5rem);
    }
  }

  @media ${device.tabletL} {
    &:nth-child(1) {
      justify-self: center;
    }

    &:nth-child(2) {
      justify-self: center;
    }

    &:nth-child(3) {
      justify-self: center;
      transform: translateX(0);
    }
  }
`;

const Image = styled.img``;

const Shape = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: -4.5rem;

  ${Image} {
    border-radius: 50%;
    border: 2px solid #cfa670;
    width: 7rem;
    height: 7rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.4rem;
`;

const Divider = styled.div`
  width: 32%;
  height: 2px;
  background-color: #cfa670;
  margin: 8.5rem auto 0 auto;
`;

const Text = styled.p`
  color: #777777;
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin: 2.5rem 5rem 1rem 5rem;
  text-align: center;
`;

const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media ${device.mobileM} {
    margin-top: 2rem;
  }
`;

const ElementsWrapper = styled.div`
  display: flex;
  margin-left: 2rem;

  ${Image} {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 4.6px;
  }
`;

const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 0.9rem;
`;

const ReadMore = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: #232323;
  margin-right: 2rem;
  white-space: nowrap;
`;

export {
  Figure,
  FigCaption,
  CardWrapper,
  Image,
  Shape,
  Title,
  Divider,
  Text,
  BottomPart,
  ElementsWrapper,
  Date,
  ReadMore
};
