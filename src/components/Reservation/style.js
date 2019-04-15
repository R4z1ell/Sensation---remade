import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const Wrapper = styled.section`
  background-image: url(images/reservation-bck.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4.5% 0;

  @media ${device.desktopS} {
    padding: 10.5% 0;
  }

  @media ${device.mobileB} {
    padding: 20.5% 0;
  }
`;

const ReservationCard = styled.div`
  text-align: center;
  background: #fff;
  width: 45%;
  height: 37.8rem;

  @media ${device.desktopS} {
    width: 51rem;
    margin-bottom: 5rem;
  }

  @media ${device.mobileB} {
    width: 43rem;
  }

  @media ${device.mobileL} {
    width: 37rem;
  }

  @media ${device.mobileM} {
    width: 32rem;
  }

  img {
    margin-top: 3.5rem;
  }
`;

const MainHeading = styled.h2`
  color: #cfa670;
  font-size: 5rem;
  font-family: 'Tangerine';
  line-height: 5.4rem;
  margin-top: 2rem;

  @media ${device.mobileL} {
    font-size: 4.5rem;
    line-height: 4.5rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.7rem;
  color: ${props => (props.sub ? '#fff' : '#232323')};

  @media ${device.desktopM} {
    font-size: 3.7rem;
  }

  @media ${device.mobileB} {
    font-size: 3.3rem;
  }

  @media ${device.mobileL} {
    font-size: 2.9rem;
  }

  @media ${device.mobileM} {
    font-size: 2.6rem;
  }
`;

const Opening = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  color: #3b3b3b;
  font-weight: 500;

  @media ${device.mobileB} {
    font-size: 1.6rem;
  }

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }

  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 120rem;
  margin: 0 auto;

  @media ${device.desktopS} {
    flex-direction: column;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  height: 55rem;
  width: 51rem;
  text-align: center;

  @media ${device.mobileB} {
    width: 43rem;
  }

  @media ${device.mobileL} {
    width: 37rem;
  }

  @media ${device.mobileM} {
    width: 32rem;
  }

  #first {
    margin-top: 2rem;
  }

  input {
    background-color: #232323;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-family: 'Cabin';
    font-size: 1.7rem;
    margin-bottom: 1rem;
    width: 70%;
    line-height: 5rem;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  padding: 1.2rem 2.4rem;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  font-family: 'Cabin';
  margin-top: 2.5rem;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #232323;
  }
`;

const OpeningWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3.5rem;

  @media ${device.mobileL} {
    margin-top: 3.8rem;
  }

  ${Opening}:first-of-type {
    width: 25.5%;

    @media ${device.desktopL} {
      width: 30.5%;
    }
  }

  ${Opening} {
    width: 24.5%;

    @media ${device.desktopL} {
      width: 28.5%;
    }
  }
`;

export {
  Wrapper,
  ReservationCard,
  MainHeading,
  SubHeading,
  Opening,
  Container,
  Form,
  Button,
  OpeningWrapper
};
