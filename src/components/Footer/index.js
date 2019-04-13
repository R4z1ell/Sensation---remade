import React from 'react';
import SVG from 'react-inlinesvg';

import {
  SectionFooter,
  Logo,
  Info,
  Image,
  Main,
  Sub,
  Divider,
  Copyright,
  Wrapper,
  InfoContainer,
  SvgWrapper
} from './style';

const Footer = () => {
  return (
    <SectionFooter bck="/images/footer-bck.jpg">
      <Wrapper>
        <Logo>Sensation</Logo>
        <SvgWrapper>
          <SVG src="/images/facebook.svg" />
          <SVG src="/images/twitter.svg" />
          <SVG src="/images/instagram.svg" />
          <SVG src="/images/tripadvisor.svg" />
        </SvgWrapper>
        <InfoContainer>
          <Info>
            <Image src="/images/location.png" />
            <div>
              <Main>Via Del Corso, 134</Main>
              <Sub>Rome, Italy</Sub>
            </div>
          </Info>
          <Info>
            <Image src="/images/phone.png" />
            <div>
              <Main>+3289242569</Main>
              <Sub>+065429932223</Sub>
            </div>
          </Info>
          <Info>
            <Image src="/images/mail.png" />
            <div>
              <Main>infosensation@gmail.com</Main>
              <Sub>www.sensation.com</Sub>
            </div>
          </Info>
        </InfoContainer>
        <Divider />
        <Copyright>© 2018 All Rights Reserved.</Copyright>
      </Wrapper>
    </SectionFooter>
  );
};

export default Footer;
