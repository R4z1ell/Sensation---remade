import styled from 'styled-components';

const SectionFooter = styled.footer`
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${props => props.bck});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Logo = styled.div`
  font-family: 'Tangerine';
  font-size: 5.9rem;
  font-weight: 700;
  color: #fff;
  padding-top: 3rem;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  margin-top: 1rem;

  &:hover {
    fill: #cfa670;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  ${Image} {
    margin-right: 2.5rem;
    margin-top: 0;
  }
`;

const Main = styled.p`
  font-size: 1.7rem;
  color: #ccc;
`;

const Sub = styled.p`
  font-size: 1.7rem;
  color: #ccc;
`;

const Divider = styled.div`
  width: 11.8rem;
  height: 1px;
  background-color: #cfa670;
  margin: 7.5rem auto 5.2rem auto;
`;

const Copyright = styled.span`
  font-size: 1.7rem;
  color: #ccc;
  margin-bottom: 5.5rem;
`;

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 5rem;

  span svg {
    width: 3rem;
    height: 3rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover path {
      fill: #cfa670;
    }

    &:hover polygon {
      fill: #cfa670;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 77.5rem;
  margin: 7rem auto 0 auto;
`;

const SvgWrapper = styled.div`
  display: flex;
  margin: 1rem auto 0 auto;
  width: 13%;
  justify-content: space-evenly;
`;

export {
  SectionFooter,
  Logo,
  Image,
  Info,
  Main,
  Sub,
  Divider,
  Copyright,
  Wrapper,
  InfoContainer,
  SvgWrapper
};
