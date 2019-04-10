import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const AboutUs = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 120rem;
  margin: 180px auto;

  @media ${device.desktopS} {
    flex-direction: column;
  }
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

  @media ${device.desktopL} {
    font-size: 2rem;
    line-height: 3.1rem;
  }

  @media ${device.desktopS} {
    margin-top: 9rem;
    font-size: 2.3rem;
    line-height: 3.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 37%;

  @media ${device.desktopS} {
    width: 70%;
  }
`;

const WrapperImages = styled(Wrapper)`
  flex-direction: row;
  width: 50%;
  margin-top: 0.5rem;

  @media ${device.desktopS} {
    margin-top: 9rem;
    width: 75%;
  }

  @media ${device.tabletM} {
    flex-direction: column;
  }

  img {
    width: 69%;
    height: 31.6rem;
    margin-right: 0.5rem;

    @media ${device.desktopL} {
      height: 35.6rem;
    }

    @media ${device.tabletM} {
      width: 100%;
      height: auto;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tabletM} {
    flex-direction: row;
    margin-top: 0.72rem;

    img:nth-child(2) {
      margin-right: 0;
    }
  }

  img:nth-child(1) {
    margin-bottom: 0.72rem;

    @media ${device.tabletM} {
      margin-bottom: 0;
    }
  }

  img {
    width: 100%;
    height: 48%;

    @media ${device.tabletM} {
      height: auto;
    }
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
