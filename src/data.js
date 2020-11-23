import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'coffee + code | Michael Burnley', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hey, I'm`,
  name: 'Michael Burnley',
  subtitle: `and I'm a Javascript Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'https://via.placeholder.com/150',
  paragraphOne: `I'm a web developer with 10+ years of experience. Primarily backend, I do my fair amount of frontend.`,
  paragraphTwo: `Developing websites and games is my passion. I'm willing to take on any project.`,
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];
export const gamesData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Lighting a Home',
    info: '',
    info2: '',
    url: 'https://globalgamejam.org/2019/games/lighting-home',
    repo: 'https://github.com/michaelburnley/torchgame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Alchemist',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/michaelburnley/alchemist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Focus!',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/michaelburnley',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-burnley/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/michaelburnley',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
