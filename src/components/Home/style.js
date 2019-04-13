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
  margin-top: 4rem;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: calc(100% - 9.4rem);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
  background-color: rgba(17, 17, 16, 0.6);
  transition: all 0.3s;
  z-index: 90;
`;

export {
  Header,
  HeadingPrimary,
  MainHeading,
  SubHeading,
  Wrapper,
  Button,
  ButtonGhost,
  Container,
  Overlay
};
