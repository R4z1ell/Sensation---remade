import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const SectionTestimonial = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.45)),
    url(${props => props.bck});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainHeading = styled.h2`
  color: #cfa670;
  font-family: 'Tangerine';
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  line-height: 5rem;
`;

const SubHeading = styled.h2`
  color: #fff;
  font-size: 4rem;
  font-weight: 400;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 3.3rem;
    line-height: 4rem;
  }
`;

const Image = styled.img`
  position: absolute;
  top: -24%;
  border-radius: 50%;

  @media (max-width: 1120px) {
    width: 11rem;
    top: -25%;
  }

  @media ${device.tabletM} {
    top: -22%;
  }

  @media ${device.mobileL} {
    width: 10rem;
    top: -19%;
  }

  @media ${device.mobileM} {
    width: 8rem;
    top: -14%;
  }
`;

const Left = styled.div`
  width: 43.5%;
  height: 25.5rem;
  border: 5px solid #cfa670;
  position: relative;
  text-align: center;

  @media (max-width: 1120px) {
    width: 57%;
    margin: 0 auto 8rem auto;
  }

  @media ${device.tabletL} {
    height: 26.5rem;
    width: 70%;
  }

  @media ${device.mobileB} {
    height: 28.5rem;
  }

  @media ${device.mobileM} {
    height: 30.5rem;
  }

  ${Image} {
    left: -12%;

    @media (max-width: 1120px) {
      left: -9%;
    }

    @media ${device.desktopM} {
      left: -10%;
    }

    @media ${device.tabletM} {
      left: -12%;
    }

    @media ${device.mobileB} {
      left: -15%;
    }

    @media ${device.mobileL} {
      left: -17%;
    }

    @media ${device.mobileM} {
      left: -16%;
    }

    @media ${device.mobileS} {
      left: -18%;
    }
  }
`;

const Right = styled.div`
  width: 43.5%;
  height: 25.5rem;
  border: 5px solid #cfa670;
  position: relative;
  text-align: center;

  @media (max-width: 1120px) {
    width: 57%;
  }

  @media ${device.tabletL} {
    height: 26.5rem;
    width: 70%;
  }

  @media ${device.mobileB} {
    height: 28.5rem;
  }

  @media ${device.mobileM} {
    height: 30.5rem;
  }

  ${Image} {
    right: -12%;

    @media (max-width: 1120px) {
      right: -8%;
    }

    @media ${device.desktopM} {
      right: -9%;
    }

    @media ${device.tabletM} {
      right: -11%;
    }

    @media ${device.mobileB} {
      right: -14%;
    }

    @media ${device.mobileL} {
      right: -16%;
    }

    @media ${device.mobileM} {
      right: -14%;
    }

    @media ${device.mobileS} {
      right: -17%;
    }
  }
`;

const Title = styled.h4`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 4rem;
  margin-bottom: 5rem;

  @media ${device.tabletS} {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }

  @media ${device.mobileM} {
    margin-bottom: 3.5rem;
  }
`;

const Text = styled.p`
  color: #fff;
  font-size: 1.7rem;
  line-height: 2.8rem;
  padding: 0 7%;

  @media ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media ${device.mobileM} {
    line-height: 2.5rem;
  }
`;

const Pagination = styled.div`
  text-align: center;
  margin-top: 6rem;

  @media (max-width: 1120px) {
    margin-top: 8rem;
  }
`;

const Page = styled.span`
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  margin-right: 0.5rem;
  width: 5rem;
  height: 0.5rem;
  transition: color 0.3s;

  &:hover {
    background-color: #cfa670;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 7rem 0;

  @media (max-width: 1120px) {
    padding: 10rem 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 6rem;
  flex-wrap: wrap;

  @media (max-width: 1120px) {
    margin-top: 8rem;
  }
`;

export {
  SectionTestimonial,
  MainHeading,
  SubHeading,
  Image,
  Left,
  Right,
  Title,
  Text,
  Pagination,
  Page,
  Container,
  Wrapper
};
