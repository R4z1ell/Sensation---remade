import styled from 'styled-components';

const AboutUs = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 120rem;
  margin: 180px auto;
`;

const HeadingSecondary = styled.h2`
  display: flex;
  flex-direction: column;
`;

const MainHeading = styled.span`
  color: #cfa670;
  font-family: 'Tangerine';
  font-size: 5rem;
  font-weight: 700;
  line-height: 5rem;
`;

const SubHeading = styled.span`
  color: #232323;
  font-size: 4rem;
  font-weight: 400;
  line-height: 4rem;
`;

const Story = styled.p`
  color: #777777;
  font-size: 1.7rem;
  line-height: 2.8rem;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 37%;
`;

const WrapperImages = styled(Wrapper)`
  flex-direction: row;
  width: 50%;
  margin-top: 0.5rem;

  img {
    width: 69%;
    height: 31.6rem;
    margin-right: 0.5rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  img:nth-child(1) {
    margin-bottom: 0.72rem;
  }

  img {
    width: 100%;
    height: 48%;
  }
`;

export {
  AboutUs,
  HeadingSecondary,
  MainHeading,
  SubHeading,
  Story,
  Wrapper,
  WrapperImages,
  ImagesContainer
};
