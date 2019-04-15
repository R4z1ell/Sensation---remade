import styled from 'styled-components';
import { device } from '../../../shared/MediaQueries';

const NavigationWrapper = styled.div`
  display: flex;
  position: ${props => (props.offset > props.value ? 'fixed' : '')};
  justify-content: space-between;
  align-items: center;
  max-width: ${props => (props.offset > props.value ? '100%' : '120rem')};
  width: ${props => (props.offset > props.value ? '100%' : '')};
  height: ${props => (props.offset > props.value ? '6rem' : '')};
  margin: 0 auto;
  background-color: ${props => (props.offset > props.value ? '#fff' : '')};
  box-shadow: ${props =>
    props.offset > props.value ? '1px 0px 5px 2px rgba(0,0,0,0.1)' : ''};
  z-index: ${props => (props.offset > props.value ? '50' : '')};

  @media ${device.desktopL} {
    max-width: ${props => (props.offset > props.value ? '100%' : '92%')};
  }
`;

const NavigationLogo = styled.div`
  font-family: 'Tangerine';
  font-size: ${props => (props.offset > props.value ? '4.9rem' : '5.9rem')};
  font-weight: 700;
  color: ${props => (props.offset > props.value ? '#232323' : '#fff')};
`;

const NavigationNav = styled.nav`
  margin-top: ${props => (props.offset > props.value ? '0' : '1.4rem')};
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.tabletL} {
    display: none;
  }
`;

const NavigationLink = styled.a`
  color: ${props => (props.offset > 1007 ? '#232323' : '#fff')};
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

const Container = styled.div`
  display: ${props => (props.offset > props.value ? 'flex' : 'flex')};
  align-items: ${props => (props.offset > props.value ? 'center' : 'center')};
  justify-content: ${props =>
    props.offset > props.value ? 'space-between' : 'space-between'};
  width: ${props => (props.offset > props.value ? '120rem' : '100%')};
  margin: ${props => (props.offset > props.value ? '0 auto' : '')};
  height: ${props => (props.offset > props.value ? '6rem' : '')};

  @media ${device.desktopL} {
    width: ${props => (props.offset > props.value ? '90%' : '100%')};
  }
`;

export {
  NavigationWrapper,
  NavigationLogo,
  NavigationNav,
  NavigationList,
  NavigationLink,
  NavigationItem,
  Container
};
