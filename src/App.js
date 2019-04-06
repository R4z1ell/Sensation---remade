import React from 'react';
import GlobalStyle from './shared/GlobalStyle';
import Home from './components/Home';
import About from './components/About';
import Reservation from './components/Reservation';
import Menu from './components/Menu';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
      <About />
      <Reservation />
      <Menu />
    </React.Fragment>
  );
};

export default App;
