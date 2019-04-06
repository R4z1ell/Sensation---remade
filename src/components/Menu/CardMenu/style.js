import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  padding: 3.6rem 2.4rem 3.6rem 11rem;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.4);
  width: 40.5%;
  margin-bottom: 4rem;
  border-right: 5px solid transparent;
  transition: all ease 0.1s;
  cursor: pointer;

  &:hover {
    border-right: 5px solid #cfa670;
  }
`;

const Heading = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
`;

const Price = styled.span`
  font-size: 1.9rem;
  font-weight: 700;
  color: #cfa670;
  margin-right: 0.5rem;
`;

const Text = styled.p`
  color: #777777;
  font-size: 1.7rem;
  line-height: 2.8rem;
  margin-top: 2.3rem;
  margin-bottom: 2rem;
`;

const OrderLink = styled.a`
  font-size: 1.3rem;
  font-weight: 700;
  color: #cfa670;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid #cfa670;
`;

const Image = styled.img`
  width: 17.8rem;
  height: 11.9rem;
  border: 2px solid #cfa670;
  position: absolute;
  top: 28.5%;
  left: -19%;
`;

export { Card, Heading, Price, Text, OrderLink, Image };
