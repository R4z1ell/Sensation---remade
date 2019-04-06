import styled from 'styled-components';

const SectionBlog = styled.section`
  max-width: 120rem;
  margin: 10rem auto 15rem auto;
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
`;

export { SectionBlog, MainHeading, SubHeading, CardsWrapper };
