import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const SectionBlog = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 15rem;
`;

const MainHeading = styled.h2`
  color: #cfa670;
  font-family: 'Tangerine';
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;

  @media (max-width: 1120px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    justify-items: center;
  }

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

export { SectionBlog, MainHeading, SubHeading, CardsWrapper };
