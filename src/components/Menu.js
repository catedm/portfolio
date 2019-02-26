import React from 'react';
import Nav from './Nav';
import { Transition, animated } from 'react-spring/renderprops';

const Menu = props => {
  return (
    <div>
      <Transition
        items={props.menuOpen}
        from={{ top: -1000, opacity: 1 }}
        enter={{ top: 0, }}
        leave={{ opacity: 0, delay: 150 }}
      >
        {show => show && (({ top, opacity }) => (
          <animated.div style={{ ...menuContainerStyle, top, opacity }}>
            <Nav menuOpen={props.menuOpen} />
          </animated.div>
        ))}
      </Transition>
    </div>
  )
}

const menuContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  background: 'rgba(183, 6, 43, 0.9)',
  textAlign: 'center'
}

export default Menu;
