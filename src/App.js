import React from 'react';
import GlobalStyle from './shared/GlobalStyle';
import Home from './components/Home';
import About from './components/About';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
      <About />
      <Reservation />
      <Menu />
      <Gallery />
      <Blog />
      <Testimonials />
    </React.Fragment>
  );
};

export default App;
