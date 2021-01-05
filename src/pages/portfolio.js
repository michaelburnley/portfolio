import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PortfolioProvider } from '../context/context';
import Portfolio from '../components/Portfolio/Portfolio';
import { portfolioData } from '../data';
import resumeFile from '../downloads/Resume-MichaelBurnley.pdf'

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    setPortfolio({ ...portfolioData });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Michael Burnley</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Portfolio | Michael Burnley" />
      </Helmet>
      <section id="hero" className="jumbotron hero-small">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Portfolio
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="#portfolio">
                Learn More
              </Link>
            </p>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go Back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
      <PortfolioProvider value={{ portfolio }}>
        <Portfolio />
      </PortfolioProvider>
    </>
  );
};


