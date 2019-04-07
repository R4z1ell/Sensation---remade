import React from 'react';
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
      <Home />
      <About />
      <Reservation />
      <Menu />
      <Gallery />
      <Blog />
      <Testimonials />
      <Services />
      <Footer />
    </React.Fragment>
  );
};

export default App;
