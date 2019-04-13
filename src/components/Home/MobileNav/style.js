import styled from 'styled-components';
import { device } from '../../../shared/MediaQueries';

const Wrapper = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 35rem;
  height: 100%;
  z-index: 100;
  padding: 0 6rem;
  background: url(/images/nav-bck.jpg) no-repeat center bottom #111110;
  text-align: center;
  overflow-y: auto;
  transform: ${props =>
    props.nav ? 'translateX(-50rem)' : 'translateX(0rem)'};
  transition: all 0.5s linear 0s;

  @media ${device.tabletL} {
    display: block;
  }
`;

const MainHeader = styled.h3`
  font-family: 'Tangerine';
  font-size: 5.9rem;
  font-weight: 700;
  line-height: 9rem;
  color: #fff;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

const Item = styled.li`
  font-size: 2.3rem;
  margin-bottom: 3rem;
  color: #aaa;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Link = styled.a``;

const Phone = styled.div`
  color: #aaa;
  text-align: left;
  font-size: 1.5rem;
`;

const Address = styled.div`
  color: #aaa;
  text-align: left;
  font-size: 1.5rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 17rem 0;
`;

const Image = styled.img`
  width: 100%;
  height: 10rem;
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: #aaa;
  font-size: 2rem;
  grid-column: 1 / 3;
`;

export {
  Wrapper,
  MainHeader,
  List,
  Item,
  Link,
  Phone,
  Address,
  Gallery,
  Image,
  Title
};
