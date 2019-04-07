import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  position: ${props => (props.offset > 1007 ? 'fixed' : 'initial')};
  justify-content: space-between;
  align-items: center;
  max-width: ${props => (props.offset > 1007 ? '100%' : '120rem')};
  width: ${props => (props.offset > 1007 ? '100%' : '120rem')};
  height: ${props => (props.offset > 1007 ? '6rem' : 'initial')};
  margin: 0 auto;
  background-color: ${props => (props.offset > 1007 ? '#fff' : 'transparent')};
  box-shadow: ${props => (props.offset > 1007 ? '0 2px 2px #2323' : 'none')};
  z-index: ${props => (props.offset > 1007 ? '50' : 'auto')};
`;

const NavigationLogo = styled.div`
  font-family: 'Tangerine';
  font-size: ${props => (props.offset > 1007 ? '4.9rem' : '5.9rem')};
  font-weight: 700;
  color: ${props => (props.offset > 1007 ? '#232323' : '#fff')};
`;

const NavigationNav = styled.nav`
  margin-top: ${props => (props.offset > 1007 ? '0' : '1.4rem')};
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
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
  display: ${props => (props.offset > 1007 ? 'flex' : 'flex')};
  align-items: ${props => (props.offset > 1007 ? 'center' : 'center')};
  justify-content: ${props =>
    props.offset > 1007 ? 'space-between' : 'space-between'};
  width: ${props => (props.offset > 1007 ? '120rem' : '100%')};
  margin: ${props => (props.offset > 1007 ? '0 auto' : '')};
  height: ${props => (props.offset > 1007 ? '6rem' : '')};
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
