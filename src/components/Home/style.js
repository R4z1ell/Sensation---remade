import styled from 'styled-components';

const Header = styled.header`
  background-image: url(/images/home-bck.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
`;

const NavigationLogo = styled.div`
  font-family: 'Tangerine';
  font-size: 5.9rem;
  font-weight: 700;
  color: #fff;
`;

const NavigationNav = styled.nav`
  margin-top: 1.4rem;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0.2rem;
    background: #cfa670;
    transition: width 0.3s;
  }
`;

const NavigationItem = styled.li`
  font-size: 1.7rem;
  font-weight: 500;
  margin-right: 4.2rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  &:hover ${NavigationLink}:after {
    width: 100%;
  }
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
`;

const SubHeading = styled.span`
  font-family: 'Cabin';
  font-size: 5.5rem;
  color: #fff;
  line-height: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 58%;
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
  Navigation,
  NavigationLogo,
  NavigationNav,
  NavigationList,
  NavigationLink,
  NavigationItem,
  HeadingPrimary,
  MainHeading,
  SubHeading,
  Wrapper,
  Button,
  ButtonGhost
};
