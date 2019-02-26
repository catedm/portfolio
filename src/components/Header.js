import React from 'react';
import Hamburger from './Hamburger';

const Header = props => {
  return (
    <div>
      <Hamburger menuOpen={props.menuOpen} toggleMenu={props.toggleMenu} />
    </div>
  )
}

export default Header;
