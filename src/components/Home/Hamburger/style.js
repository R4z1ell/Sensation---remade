import styled from 'styled-components';
import { device } from '../../../shared/MediaQueries';

const HamburgerWrapper = styled.div`
  display: none;
  height: 38px;
  margin-top: ${props => (props.offset > 1007 ? '0px' : '8px')};
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media ${device.tabletL} {
    display: inline-block;
  }
`;

const HamburgerInner = styled.div`
  position: relative;
  width: 40px;
  height: 4px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 2px;
  background-color: ${props => (props.offset > 1007 ? '#232323' : '#fff')};
  margin-top: 1rem;
  transform: ${props =>
    props.status ? 'translate3d(0,10px,0) rotate(45deg)' : ''};

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: ${props => (props.offset > 1007 ? '#232323' : '#fff')};
  }

  &:after {
    bottom: -10px;
    transform: ${props =>
      props.status ? 'rotate(-45deg) translate3d(-5.71429px,-6px,0)' : ''};
    opacity: ${props => (props.status ? '0' : '1')};
  }

  &:before {
    top: 20px;
    transform: ${props =>
      props.status ? 'translate3d(0,-20px,0) rotate(-90deg)' : ''};
  }
`;

export { HamburgerWrapper, HamburgerInner };
