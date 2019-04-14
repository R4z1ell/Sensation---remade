import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const SectionServices = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
`;

const MainHeading = styled.h2`
  color: #cfa670;
  font-family: 'Tangerine';
  font-size: 5rem;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  line-height: 5rem;
`;

const SubHeading = styled.h2`
  color: #232323;
  font-size: 4rem;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #232323;
  width: calc(120rem / 3 - 4.5%);
  height: 22.6rem;

  @media ${device.desktopM} {
    width: 32rem;
  }

  @media ${device.desktopS} {
    width: 30rem;
  }

  @media (max-width: 850px) {
    width: 50rem;
    margin-bottom: 3rem;
  }

  @media ${device.mobileB} {
    width: 40rem;
  }

  @media ${device.mobileL} {
    width: 37rem;
  }

  @media ${device.mobileM} {
    width: 31rem;
  }
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Title = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  white-space: nowrap;
  margin-top: 1.5rem;
`;

const Text = styled.p`
  color: #777777;
  font-size: 1.7rem;
  line-height: 2.8rem;
  text-align: center;
  padding: 0 10%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8rem;
  flex-wrap: wrap;
`;

export {
  SectionServices,
  MainHeading,
  SubHeading,
  ServiceCard,
  Image,
  Title,
  Text,
  Container
};
