import React, { Fragment } from 'react';
import { Spring } from 'react-spring/renderprops';

const Hamburger = props => {
  return (
    <Fragment>
      <Spring
        from={{
          position: 'static',
          transform: 'rotate(0deg)',
          width: 40
        }}
        to={{
          position: props.menuOpen ? 'absolute' : 'static',
          rotation:  props.menuOpen ? '45deg' :  '0deg',
          width: props.menuOpen ? 0 : 40
        }}
      >
        { ({position, rotation, width}) => (
          <div className="burger-container outer">
            <div onClick={props.toggleMenu} className="burger-container inner">
              <div className="line one" style={{ position, transform: `rotate(${rotation})` }} ></div>
              <div className="line two" style={{ position, width }}></div>
              <div className="line three" style={{ transform: `rotate(-${rotation})` }}></div>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  )
}

export default Hamburger;
