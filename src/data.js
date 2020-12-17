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
  cta: 'Learn More',
  images: [
    `javascript.png`,
    `ruby.png`,
    `csharp.png`,
  ],
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: `Hey! I'm a Freelance web/app developer with 10+ years of experience. Primarily backend, I do my fair amount of frontend particularly working in Javascript, C#, and Ruby. I also have 6+ years working with Shopify, so I do a lot of template and backend work for Shopify sites, as well.`,
  paragraphTwo: `I have a client-centric approach to development, often helping small startups with consulting as well as programming expertise.`,
  paragraphThree: "I'm also a hobbyist game developer with a couple of projects in the works.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'FitnaticSite.png',
    title: 'Fitnatic',
    info: 'Fitnatic is an upcoming platform for connecting Fitness Trainers and their clients. Included within are a myriad of features from macro counting to hiking trails.',
    info2: 'The entirety of the project is built within React Native, for both Android and iOS platforms.',
    url: 'https://thefitcom.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectccg_banner.png',
    title: 'ProjectCCG',
    info: 'Their upcoming site is built on Shopify. We have been working together to build this small Trading Card Game retail store a web presence that can handle the specific needs of a high-volume business.',
    info2: '',
    url: 'https://michaelburnley.com',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];
export const gamesData = [
  {
    id: nanoid(),
    img: 'lightingahome.png',
    title: 'Lighting a Home',
    info: 'Lighting a Home was game developed in Unity for Global Game Jam developed by myself and Markise Gladney and over the course of 48 hours.',
    info2: 'The short timeframe really had us focusing on the overall scope in what we could accomplish in that time as well as a clear test of our abilities within Unity and C#.',
    url: 'https://globalgamejam.org/2019/games/lighting-home',
    repo: 'https://github.com/michaelburnley/torchgame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'currentlydeveloping.png',
    title: 'The Alchemist',
    info: 'The Alchemist is a turn-based strategy game set during a fantasy version of the Islamic Golden Age. Created in Unity.',
    info2: 'Currently in development!',
    url: 'https://github.com/michaelburnley/alchemist',
    repo: 'https://github.com/michaelburnley/alchemist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'currentlydeveloping.png',
    title: 'Focus!',
    info: "Focus! is an action game that I'm developing with a small team. Created in Unity.",
    info2: 'Currently in development!',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me?",
  btn: '',
  email: 'about@michaelburnley.com',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
