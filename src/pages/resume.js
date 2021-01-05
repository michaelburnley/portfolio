import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PortfolioProvider } from '../context/context';
import Resume from '../components/Resume/Resume';
import { resumeData } from '../data';
import resumeFile from '../downloads/Resume-MichaelBurnley.pdf'

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  const [resume, setResume] = useState({});

  useEffect(() => {
    setResume({ ...resumeData });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume + Portfolio | Michael Burnley</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Resume + Portfolio | Michael Burnley" />
      </Helmet>
      <section id="hero" className="jumbotron hero-small">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Resume
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <a className="cta-btn cta-btn--hero" href={resumeFile} download>Download</a>
            </p>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/portfolio/">
                Portfolio
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
      <PortfolioProvider value={{ resume }}>
        <Resume />
      </PortfolioProvider>
    </>
  );
};


