import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const SectionMenu = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 10rem;
`;

const ButtonMenu = styled.div`
  text-align: center;
  margin-bottom: 10rem;

  @media (max-width: 1100px) {
    margin-bottom: 17rem;
  }

  @media ${device.tabletL} {
    margin-bottom: 10rem;
  }

  @media ${device.tabletM} {
    margin-bottom: 20rem;
  }
`;

const Button = styled.button`
  background-color: #232323;
  color: #fff;
  letter-spacing: 0.1rem;
  margin-right: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.7rem 3.4rem;
  border: none;
  font-family: 'Cabin';
  font-size: 1.5rem;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #cfa670;
    color: #232323;
  }
`;

const PageMenu = styled.div`
  text-align: center;
  padding: 7rem 0;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    padding: 0 0 7rem 0;
  }

  @media ${device.tabletL} {
    padding: 7rem 0 7rem 0;
  }

  @media ${device.tabletM} {
    padding: 0 0 7rem 0;
  }
`;

const Page = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
  background-color: #232323;
  color: #fff;
  letter-spacing: 0.1rem;
  margin-right: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #cfa670;
    color: #232323;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transform: translateX(4.5rem);

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    transform: translateX(0);
  }

  @media ${device.tabletL} {
    justify-content: center;
    transform: translateX(4rem);
  }

  @media ${device.tabletM} {
    transform: translateX(0);
  }
`;

export { SectionMenu, ButtonMenu, Button, PageMenu, Page, CardsWrapper };
