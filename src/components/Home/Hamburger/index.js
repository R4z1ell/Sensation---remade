import React, { useState } from 'react';

import { HamburgerWrapper, HamburgerInner } from './style';

const Hamburger = props => {
  const [iconStatus, setIconStatus] = useState(false);

  const handleHamburger = () => {
    setIconStatus(!iconStatus);
    props.sendNavStatus(iconStatus);
  };

  return (
    <HamburgerWrapper onClick={handleHamburger} offset={props.offset}>
      <HamburgerInner status={iconStatus} offset={props.offset} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
