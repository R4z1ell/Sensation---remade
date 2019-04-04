import React from 'react';
import GlobalStyle from './shared/GlobalStyle';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
      <About />
    </React.Fragment>
  );
};

export default App;
