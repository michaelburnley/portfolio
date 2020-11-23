import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Games from './Projects/Games';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

// import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import { heroData, aboutData, projectsData, gamesData, contactData, footerData } from '../data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [games, setGames] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setGames([...gamesData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, games, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Games />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
