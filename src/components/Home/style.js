import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const Header = styled.header`
  background-image: url(/images/home-bck.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const HeadingPrimary = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  position: absolute;
  width: 100%;
  top: 44%;
`;

const MainHeading = styled.span`
  font-family: 'Tangerine';
  font-size: 7.5rem;
  color: #cfa670;
  line-height: 8rem;

  @media ${device.tabletM} {
    font-size: 6.5rem;
  }

  @media ${device.mobileB} {
    font-size: 5.5rem;
  }
`;

const SubHeading = styled.span`
  font-family: 'Cabin';
  font-size: 5.5rem;
  color: #fff;
  line-height: 5rem;

  @media ${device.tabletM} {
    font-size: 4.5rem;
  }

  @media ${device.mobileB} {
    font-size: 4rem;
    line-height: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 58%;
  margin-top: 2rem;

  @media ${device.desktopL} {
    margin-top: 0;
  }

  @media ${device.mobileB} {
    top: 57%;
  }
`;

const Button = styled.a`
  background-color: #cfa670;
  color: #232323;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.4rem 3.4rem;
  margin-right: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #b28451;
  }
`;

const ButtonGhost = styled(Button)`
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 1.2rem 3.4rem;
  margin-right: 0rem;

  &:hover {
    background-color: #fff;
    color: #232323;
  }
`;

export {
  Header,
  HeadingPrimary,
  MainHeading,
  SubHeading,
  Wrapper,
  Button,
  ButtonGhost
};
