import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(/images/reservation-bck.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4.5% 0;
`;

const ReservationCard = styled.div`
  text-align: center;
  background: #fff;
  width: 45%;
  height: 37.8rem;

  img {
    margin-top: 2rem;
  }
`;

const MainHeading = styled.h2`
  color: #cfa670;
  font-size: 5rem;
  font-family: 'Tangerine';
  line-height: 5.4rem;
  margin-top: 2rem;
`;

const SubHeading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.7rem;
  color: ${props => (props.sub ? '#fff' : '#232323')};
`;

const Opening = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  color: #3b3b3b;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 120rem;
  margin: 0 18.46%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  height: 55rem;
  width: 51rem;
  text-align: center;

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
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #232323;
  }
`;

const OpeningWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;

  p:nth-child(2) {
    margin-right: 4rem;
  }

  p:nth-child(3) {
    margin-right: 1rem;
    transform: translateX(-3rem);
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
