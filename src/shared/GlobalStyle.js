import { createGlobalStyle } from 'styled-components';
import { device } from './MediaQueries';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;

    @media ${device.desktopL} {
    font-size: 55%;
    }
  }

  body {
   font-family: "Cabin";
   font-weight: 400;
   line-height: 1.6;
  }
`;

export default GlobalStyle;
