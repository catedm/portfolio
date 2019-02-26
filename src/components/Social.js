import React from 'react';
import { Trail } from 'react-spring/renderprops';

const icons = [
  {
    id: 1,
    className: 'fab fa-github margin-right',
    link: 'https://github.com/catedm'
  },
  {
    id: 2,
    className: 'fab fa-linkedin margin-right',
    link: 'https://www.linkedin.com/in/david-cate-73363b84/'
  },
  {
    id: 3,
    className: 'fab fa-medium',
    link: 'https://medium.com/@david_cate'
  },
  // "<i className='fab fa-github' style={{ ...iconStyles, marginRight: '30px' }}></i>",
  // "<i className='fab fa-linkedin' style={{ ...iconStyles, marginRight: '30px' }}></i>",
  // "<i className='fab fa-medium' style={{ ...iconStyles}}></i>",
]

const Social = () => {
  return (
    <div style={iconNavContainerStlyes}>
      <div style={iconNavFlexboxSyles}>
        <Trail
          items={icons} keys={item => item.id}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={600}
        >
          {item => props =>
            <div>
              <a href={item.link} target="_blank"><i style={{ ...props, ...iconStyles }} className={item.className}></i></a>
            </div>
          }
        </Trail>
      </div>
    </div>
  )
}

const iconNavContainerStlyes = {
  marginTop: '35px',
  borderTop: '1px solid #fff',
}

const iconNavFlexboxSyles = {
  display: 'flex', 
  justifyContent: 'space-evenly', 
  marginTop: '35px'
}

const iconStyles = {
  fontSize: '28px',
  color: '#fff',
}

export default Social;
