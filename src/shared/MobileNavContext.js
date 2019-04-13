import React from 'react';

const MobileNavContext = React.createContext({
  mobileNavStatus: false,
  toggleSideNav: () => {}
});

export default MobileNavContext;
