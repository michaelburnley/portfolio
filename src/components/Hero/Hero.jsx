import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Slider from './slider';


const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, images } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}<br /><span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            <div id="slider-row" style={{ display: `flex` }}>and I'm a <Slider images={images} /></div>
            <span className="text-color-main">Developer</span>

          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
          <p className="hero-cta secondary">
            <span className="cta-btn cta-btn--hero">
              <a href="/portfolio/" to="/portfolio/">
                Portfolio
              </a>
            </span>
          </p>
        </Fade>
      </Container>
      {/* <Slider images={images} /> */}

    </section>
  );
};

export default Header;
