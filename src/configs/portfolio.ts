const portfolioConf = {
  portfolio: {
    name: 'Portfolio',
    logoUrl: '/android-chrome-192x192.png',
    coverUrl: '/projects/portfoliocover.jpg',
    type: 'Front End',
    tags: ['React', 'NextJS', 'TypeScript', 'Locomotive Scroll', 'ThreeJS', 'Axios', 'Sass'],
    description: [
      {
        language: 'EN',
        contents:
          "In order to centralize my projects and show my skills in development, I've decided to make this website like a showcase of my work. The whole code is available on my GitHub.",
      },
      {
        language: 'FR',
        contents:
          "Dans le but de centraliser mes projets et montrer mes compétences en développement, j'ai décidé de réaliser ce site comme une vitrine de mon travail. L'ensemble du code est disponible sur mon GitHub.",
      },
    ],
    links: {
      git: {
        host: 'GitHub',
        url: 'https://github.com/vincentpageaud/portfolio',
      },
    },
  },
  keyservices: {
    name: 'KeyServices',
    logoUrl: '/projects/keyservices.png',
    coverUrl: '/projects/keyservicescover.jpg',
    type: 'Full stack',
    tags: ['React', 'NextJS', 'Redux', 'Leaflet', 'Framer Motion', 'NodeJS', 'Express', 'MongoDB'],
    description: [
      {
        language: 'EN',
        contents:
          'On this fictional project, I made a full concierge PWA. With the management of properties, user profiles, and the possibility of contacting his advisor. I created the whole UI/UX, the Front and the Back.',
      },
      {
        language: 'FR',
        contents:
          'Sur ce projet fictif, j’ai réalisé une PWA de conciergerie complète. Avec la gestion des biens, des profils utilisateurs, et la possibilité de contacter son conseiller. J’ai créé l’ensemble de l’UI/UX, le Front et le Back.',
      },
    ],
    // links: {
    //   website: 'https://keyservices.vincentpageaud.com/',
    // },
  },
  thetiptop: {
    name: 'ThéTipTop',
    logoUrl: '/projects/thetiptop.png',
    coverUrl: '/projects/thetiptopcover.jpg',
    type: 'Front End',
    tags: ['TypeScript', 'React', 'NextJS', 'Rematch', 'Material UI', 'Axios', 'SwiperJS', 'NodeJS', 'Koa', 'MongoDB'],
    description: [
      {
        language: 'EN',
        contents:
          'On this studies project, I created a contest-game site. With the possibility of drawing a lot directly, and participating in the final draw, launched from a back office. I created the Front via a UI/UX provided, participated in the creation of the Back routes, and set up the workflow.',
      },
      {
        language: 'FR',
        contents:
          'Sur ce projet d’études, j’ai réalisé un site de jeu-concours. Avec la possibilité de tirer un lot directement, et de participer au tirage au sort final, lancé depuis un back office. J’ai créé le Front via une UI/UX fournie, participé à la création des routes du Back, et mis en place le workflow.',
      },
    ],
  },
};

export default portfolioConf;
