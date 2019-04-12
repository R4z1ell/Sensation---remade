import React, { useState } from 'react';

import { HamburgerWrapper, HamburgerInner } from './style';

const Hamburger = () => {
  const [iconStatus, setIconStatus] = useState(false);

  const handleHamburger = () => {
    setIconStatus(!iconStatus);
  };
  return (
    <HamburgerWrapper onClick={() => handleHamburger()}>
      <HamburgerInner status={iconStatus} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
