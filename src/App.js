import React from 'react';
import { Element } from 'react-scroll';

import GlobalStyle from './shared/GlobalStyle';
import Home from './components/Home';
import About from './components/About';
import Reservation from './components/Reservation';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Reservation">
        <Reservation />
      </Element>
      <Element name="Menu">
        <Menu />
      </Element>
      <Element name="Gallery">
        <Gallery />
      </Element>
      <Element name="Blog">
        <Blog />
      </Element>
      <Element name="Testimonials">
        <Testimonials />
      </Element>
      <Element name="Services">
        <Services />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </React.Fragment>
  );
};

export default App;
