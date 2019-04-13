import React, { useContext } from 'react';
import MobileNavContext from '../../../shared/MobileNavContext';

import { HamburgerWrapper, HamburgerInner } from './style';

const Hamburger = props => {
  const mobileNav = useContext(MobileNavContext);

  const handleHamburger = () => {
    mobileNav.toggleSideNav();
  };

  return (
    <HamburgerWrapper onClick={handleHamburger} offset={props.offset}>
      <HamburgerInner
        status={mobileNav.mobileNavStatus}
        offset={props.offset}
      />
    </HamburgerWrapper>
  );
};

export default Hamburger;
