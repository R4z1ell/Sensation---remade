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
  transform: translateY(-3rem);
`;

const MainHeading = styled.span`
  font-family: 'Tangerine';
  font-size: 7.5rem;
  color: #cfa670;
  line-height: 8rem;

  @media ${device.tabletM} {
    font-size: 6.5rem;
    line-height: 7rem;
  }

  @media ${device.mobileB} {
    font-size: 5.5rem;
  }

  @media ${device.mobileL} {
    font-size: 5rem;
    margin-right: 5px;
  }

  @media ${device.mobileM} {
    font-size: 4.2rem;
    line-height: 6rem;
  }
`;

const SubHeading = styled.span`
  font-family: 'Cabin';
  font-size: 5.5rem;
  color: #fff;
  line-height: 5rem;

  @media ${device.tabletM} {
    font-size: 4.3rem;
  }

  @media ${device.mobileB} {
    font-size: 3.5rem;
    line-height: 3rem;
  }

  @media ${device.mobileL} {
    font-size: 3rem;
  }

  @media ${device.mobileM} {
    font-size: 2.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  transform: translateY(-4rem);
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
  cursor: pointer;
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
