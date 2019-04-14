import styled from 'styled-components';
import { device } from '../../../shared/MediaQueries';

const Card = styled.div`
  position: relative;
  padding: 3.6rem 2.4rem 3.6rem 11rem;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.4);
  width: 40.5%;
  margin-bottom: 4rem;
  border-right: 5px solid transparent;
  transition: all ease 0.1s;
  cursor: pointer;

  @media (max-width: 1100px) {
    padding: 8rem 3rem 4rem 5.3rem;
    margin-bottom: 10rem;
    width: 48.5rem;
  }

  @media ${device.desktopS} {
    width: 41.5rem;
  }

  @media ${device.tabletL} {
    padding: 4rem 3rem 4rem 12.3rem;
    margin-bottom: 5rem;
    width: 60rem;
  }

  @media ${device.tabletM} {
    padding: 8.5rem 4.3rem 3rem 4.3rem;
    margin-bottom: 12rem;
    width: 48rem;
  }

  @media ${device.mobileB} {
    width: 42rem;
  }

  @media ${device.mobileL} {
    padding: 8.5rem 4% 3rem 4%;
    width: 36rem;
  }

  @media ${device.mobileM} {
    width: 31rem;
  }

  &:hover {
    border-right: 5px solid #cfa670;
  }
`;

const Heading = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }

  @media ${device.mobileM} {
    font-size: 1.7rem;
  }
`;

const Price = styled.span`
  font-size: 1.9rem;
  font-weight: 700;
  color: #cfa670;
  margin-right: 0.5rem;

  @media (max-width: 1100px) {
    margin-right: 1.3rem;
  }

  @media ${device.desktopS} {
    margin-right: 0rem;
  }

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  color: #777777;
  font-size: 1.7rem;
  line-height: 2.8rem;
  margin-top: 2.3rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    font-size: 1.9rem;
  }

  @media ${device.mobileB} {
    font-size: 1.63rem;
  }

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;

const OrderLink = styled.a`
  font-size: 1.3rem;
  font-weight: 700;
  color: #cfa670;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid #cfa670;
`;

const Image = styled.img`
  width: 17.8rem;
  height: 11.9rem;
  border: 2px solid #cfa670;
  position: absolute;
  top: 28.5%;
  left: -19%;

  @media (max-width: 1100px) {
    top: -20.5%;
    left: 31%;
  }

  @media ${device.tabletL} {
    top: 27.5%;
    left: -15%;
  }

  @media ${device.tabletM} {
    top: -21.5%;
    left: 31%;
  }

  @media ${device.mobileB} {
    left: 29.5%;
  }

  @media ${device.mobileL} {
    left: 26%;
  }

  @media ${device.mobileM} {
    left: 22%;
  }
`;

export { Card, Heading, Price, Text, OrderLink, Image };
