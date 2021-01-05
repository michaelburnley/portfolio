import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Languages from './sections/language';
import Education from './sections/education';
import Positions from './sections/positions';

const Resume = () => {
  const { resume } = useContext(PortfolioContext);

  const {
    education,
    languages,
    positions,
    summary
  } = resume;

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
    <section id="resume">
      <Container>
        <div id="summary">{summary}</div>
        <Title title="Languages" />
        <Languages data={languages} />
        <Title title="Education" />
        <Education data={education} />
        <Title title="Work History" />
        <Positions data={positions} />
      </Container>
    </section>
  );
};



export default Resume;
