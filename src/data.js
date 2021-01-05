import { nanoid } from 'nanoid';
import lightingVideo from './videos/lighting1.mp4';
import focusVideo1 from './videos/focus1.mp4';
import focusVideo2 from './videos/focus2.mp4';
import focusVideo3 from './videos/focus3.mp4';

import alchemist_design_doc from './downloads/DesignDoc_Alchemist.pdf';
import alchemist_technical_doc from './downloads/TechnicalDesign_Alchemist.pdf';

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

export const resumeData = {
  summary: `I am a web developer and programmer with ten years of experience working with HTML, CSS, Javascript, C++, as well as other related frameworks and languages. I have also been designing and programming games as a hobby for 7+ years, and made my first attempt at commercial game development at the end of 2011.`,
  education: [
    {
      name: `Santa Barbara City College`,
      img: `me.jpg`,
      dates: `2009-2011`,
      location: `Santa Barbara, CA`,
    },
    {
      name: `University of California, Santa Barbara`,
      img: `me.jpg`,
      dates: `2008-2009`,
      location: `Santa Barbara, CA`,
    },
    {
      name: `Diamond Ranch High School `,
      img: `me.jpg`,
      dates: `2004-2008`,
      location: `Pomona, CA`,
    },
  ],
  languages: [
    {
      name: `C#`,
      img: `me.jpg`
    },
    {
      name: `C++`,
      img: `me.jpg`
    },
    {
      name: `Unity 3D`,
      img: `me.jpg`
    },
    {
      name: `Python`,
      img: `me.jpg`
    },
    {
      name: `Javascript`,
      img: `me.jpg`
    },
    {
      name: `GraphQL`,
      img: `me.jpg`
    },
    {
      name: `React/React Native`,
      img: `me.jpg`
    },
    {
      name: `HTML`,
      img: `me.jpg`
    },
    {
      name: `CSS`,
      img: `me.jpg`
    },
    {
      name: `Ruby`,
      img: `me.jpg`
    },
    {
      name: `Rails`,
      img: `me.jpg`
    },
    {
      name: `Node.js`,
      img: `me.jpg`
    },
    {
      name: `Docker`, 
      img: `me.jpg`
    },
  ],
  skills: [
    `Google Adwords`,
    `Familiarity with multiple marketing channels`,
    `E-commerce (Amazon, Ebay, etc.)`,
    `Shopify`,
  ],
  positions: [
    {
      title: `Freelance Developer`,
      business: `Self-Employed`,
      img: `me.jpg`,
      location: `Pomona, CA`,
      dates: `2019-2021`,
      description: `As a freelance developer, I help clients build applications/websites primarily in the e-commerce space, just finishing an engagement for an iOS/Android app built in React Native.`,
      bullets: [
        `Create, Plan, and Build Shopify sites`,
        `Develop backend applications for automation purposes`,
        `Mobile Development`,
        `API Development`
      ],
    },
    {
      title: `Back-End Developer`,
      business: `Lucidfusion`,
      img: `me.jpg`,
      location: `Costa Mesa, CA`,
      dates: `2019-2019`,
      description: `At Lucidfusion I worked on a backend team of 3, building sites for large retailers who were making the transition to Shopify.`,
      bullets: [
        `Integrate APIs w/ Shopify Plus`,
        `Build Middleware for Shopify + Enterprise Software`,
        `Light Frontend Work`,
        `API Development`
      ],
    },
    {
      title: `Sr. Full Stack React Engineer`,
      business: `V1 Worldwide`,
      img: `me.jpg`,
      location: `Remote`,
      dates: `2018-2018`,
      description: `At V1 Worldwide I work as a Senior Full Stack Engineer with a focus on e-commerce. I am responsible for prototyping the consumer site and primarily managing the Component Library along with our team in India.`,
      bullets: [
        `React Component Library Management`,
        `GraphQL and Integrations`,
        `Consumer Prototyping`,
        `API Development`
      ],
    },
    {
      title: `Senior Web Engineer and Tech Manager`,
      business: `ZOOSHOO`,
      img: `me.jpg`,
      location: `Chino, CA`,
      dates: `2012-2018`,
      description: `In this position I managed ZOOSHOO’s entire tech stack and worked with the CEO to design and implement new systems. I also worked closely with Business Development and Creatives to track and implement marketing directives.`,
      bullets: [
        `Consumer/Internal Site Development`,
        `Shopify and Reporting System Development`,
        `Business Development Research`,
        `Systems Management`
      ],
    },
  ],
};

export const portfolioData = {
  img: 'me.jpg',
  education: [
    {
      name: `Santa Barbara City College`,
      dates: `2009-2011`,
      location: `Santa Barbara, CA`,
    },
    {
      name: `University of California, Santa Barbara`,
      dates: `2008-2009`,
      location: `Santa Barbara, CA`,
    },
    {
      name: `Diamond Ranch High School `,
      dates: `2004-2008`,
      location: `Pomona, CA`,
    },
  ],
  languages: [
    `C#`,
    `C++`,
    `Unity 3D`,
    `Python`,
    `Javascript`,
    `GraphQL`,
    `React/React Native`,
    `HTML`,
    `CSS`,
    `Ruby`,
    `Rails`,
    `Node.js`,
    `Docker` 
  ],
  skills: [
    `Google Adwords`,
    `Familiarity with multiple marketing channels`,
    `E-commerce (Amazon, Ebay, etc.)`,
    `Shopify`,
  ],
  positions: [
    {
      location: `Pomona, CA`,
      dates: `2019-2020`,
      description: `As a freelance developer, I help clients build applications/websites primarily in the e-commerce space, just finishing an engagement for an iOS/Android app built in React Native.`,
      bullets: [
        `Create, Plan, and Build Shopify sites`,
        `Develop backend applications for automation purposes`,
        `Mobile Development`,
        `API Development`
      ],
    },
  ],
  games: [
    {
      title: `Lighting a Home`,
      description: "Lighting a Home was a game developed in Unity for Global Game Jam developed by myself and Markise Gladney and over the course of 48 hours.\nThe short timeframe forced us to focus on the overall scope in what we could accomplish in that time as well as a clear test of our abilities within Unity and C#.",
      platform: `PC`,
      development_tools: `Unity3D`,
      language: `C#`,
      media: [
        {
          type: `banner`,
          file: `lightingahome.png`
        },
        {
          type: `video`,
          file: lightingVideo,
          alt: `Lighting a Home`
        },
      ],
      url: 'https://globalgamejam.org/2019/games/lighting-home',
      repo: 'https://github.com/michaelburnley/torchgame',
    },
    {
      title: `Focus!`,
      description: "Focus! is a 2D action game that I'm developing with a small team, taking inspiration from games like Devil May Cry and Bayonetta.",
      platform: `PC`,
      development_tools: `Unity3D`,
      language: `C#`,
      media: [
        {
          type: `banner`,
          file: `currentlydeveloping.png`
        },
        {
          type: `image`,
          file: `focus_combo_system_sample.png`,
          alt: `Combo System Sample`
        },
        {
          type: `video`,
          file: focusVideo1,
          alt: `Animation Test 1`
        },
        {
          type: `video`,
          file: focusVideo2,
          alt: `Animation Test 2`
        },
        {
          type: `video`,
          file: focusVideo3,
          alt: `Animation Test 3`
        },
      ],
      // url: 'https://github.com/michaelburnley/focus',
      repo: 'https://github.com/michaelburnley/focus',
    },
    {
      title: `The Alchemist`,
      description: "The Alchemist is a turn-based strategy game set during a fantasy version of the Islamic Golden Age.\nPotion-mixing and terrain affects are the main gameplay draws.",
      platform: `PC`,
      development_tools: `Unity3D`,
      language: `C#`,
      media: [
        {
          type: `banner`,
          file: `currentlydeveloping.png`
        },
        {
          type: `image`,
          file: `alchemist_inventory_sample.png`,
          alt: `Inventory Sample`
        },
      ],
      // url: 'https://globalgamejam.org/2019/games/lighting-home',
      repo: 'https://github.com/michaelburnley/alchemist',
      design_docs: [
        {
          file: alchemist_design_doc,
          title: `Design Doc`
        },
        {
          file: alchemist_technical_doc,
          title: `Technical Design`
        }
      ],
    },
  ],
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
