import React from 'react';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';
import Social from './Social';

const items = ['Home', 'Work', 'About']

const Nav = props => {
  const trail = useTrail(items.length, {
    from: { opacity: 0, x: 20, height: 0 },
    opacity: props.menuOpen ? 1 : 0,
    x: props.menuOpen ? 0 : 20,
    height: props.menuOpen ? 80 : 0,
  })

  return (
    <div className="trails-main" >
      <nav>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>
              <Link to={items[index].toLowerCase()}>
                {items[index]}
              </Link>
            </animated.div>
          </animated.div>
        ))}
        <Social />
      </nav>
    </div>
  )
}

export default Nav;
