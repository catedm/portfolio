import React from 'react';
import Hamburger from './Hamburger';

const Home = () => {
  return (
    <div style={conatinerStyles}>
      <div style={leftColStyles}></div>
      <div style={pageTitleStyles}>
        <h1>HE<br />LLO<span style={{ color: "#b7062b" }}>.</span></h1>
      </div>
      <div style={pageContentStyles}>
        <div className="menu">
          <Hamburger />
        </div>
        {/* <div class="main"></div> */}
        <div className="tagline">
          I am a full stack developer with a front end focus.</div>
      </div>
    </div>
  )
}

const conatinerStyles = {
  display: 'grid',
  gridTemplateColumns: '40% 17% auto',
  height: '100vh',
  gridGap: '10px',
}

const leftColStyles = {
  backgroundImage: "url('https://theramblesplashstaging.com/Layer-1.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}

const pageTitleStyles = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '55px',
  lineHeight: '95px',
  marginLeft: '-100px',
  fontFamily: 'Playfair Display, serif',
}

const pageContentStyles = {
  display: 'grid',
  gridGap: '10px',
  gridTemplateRows: '60px auto',
}

export default Home;


