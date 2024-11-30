import {IMember} from "@/model/IMember";
import {EPosition, ERole, ESocialType, EWorkStatus} from "@/model/enums";
import {TTechnologiesChart, TWorkStatusChart} from "@/model/Types";

export const role: ERole = ERole.ADMIN
export const status = [EWorkStatus.EMPTY,EWorkStatus.FULL,EWorkStatus.HALF]
export const positions = [EPosition.FE,EPosition.BE,EPosition.QA,EPosition.DESIGNER]
export const members: IMember[] = [
  {
    id: 1,
    image: '/photoStatic.jpg',
    name: 'Alice',
    surname: 'Felis',
    email: 'alice@example.com',
    position: EPosition.BE,
    experience: '1',
    skills: ['Angular', 'Type Script'],
    socials: [
      {type: ESocialType.TELEGRAM, href: "https://t.me/kushchik"},
      {type: ESocialType.MAIL, href: "mailto:okushchik@gmail.com"},
      {type: ESocialType.PHONE, href: "tel:+380664266500"},
      {type: ESocialType.GOOGLECHAT, href: "/"}],
    status: EWorkStatus.EMPTY,
    cv: {
      technicalExpertise: '4+ years of experience in Web Development;\n' +
        'Adhering to clean code principles and best development practices,\n' +
        'including object-oriented design, refactoring, design patterns, and\n' +
        'continuous integration.\n' +
        'Skilled in TypeScript/JavaScript development, with experience in building\n' +
        'responsive and user-friendly interfaces.\n' +
        'Knowledgeable in popular front-end frameworks and libraries.\n' +
        'Solid understanding of the Software Development Lifecycle.',
      toolsAndFrameworks: 'General: React (Redux/Hooks/ContextAPI/Next.js), REST API, Graphql,\n' +
        'ECMAScript, TypeScript, Semantic HTML, Nunjucks;\n' +
        'Styling: BEM, SCSS, Bootstrap, Tailwind, styled-components;\n' +
        'Utils: Axios, Formik, Redux-Form, Moment, Redux Toolkit;\n' +
        'Auth: SSO;\n' +
        'Databases: SQL;\n' +
        'Routing: React-Router;\n' +
        'Build Tools: Webpack, Gulp, Vite, npm;\n' +
        'Version Control: GitHub, GitLab, Bitbucket;\n' +
        'ALM: JIRA, Trello;\n' +
        'Additional exp: Animations, Web Accessibility;',
      communication: 'Good command of English (both written and verbal);\n' +
        'Ability to communicate with key roles outside of the engineering team:\n' +
        'product management, engineering management, DevOps, tech support,\n' +
        'etc.;\n' +
        'Ability to provide tech guidance and mentoring to less experienced team\n' +
        'members, enforce good coding practices through code reviews and\n' +
        'mentoring. Ability to "own" the problem;\n' +
        'Ability to identify and escalate potential issues to the project leadership\n' +
        'and suggest efficient workable solutions;\n' +
        'Ability to effectively transfer knowledge within the team;',
      projects: 'Dashboard\n' +
        'System that helps developers to create notes and share with the team;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, TypeScript, Redux Toolkit, Tailwind;\n' +
        'Responsibilities: Developing new features, fixing minor bugs,\n' +
        'participating in daily meetings and problem discussions;\n' +
        'Portfolio for Media Team\n' +
        'Web-site with a lot of different animations;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: Wordpress, Semantic HTML, ECMAScript, BEM, SCSS,\n' +
        'AnimeJs, with sliders and motions;\n' +
        'Responsibilities: Developing mark up with animations and masks.\n' +
        'Creating responsive design for all devices. Participating in daily meetings\n' +
        'and problem discussions;\n' +
        '\n' +
        'Art Centere platform\n' +
        'Online platform for organizations involved in hosting events, classes,\n' +
        'sessions, and workshops. The system includes scheduling, event\n' +
        'discovery page, and the ability to authenticate and register for events;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, React-router, React-hooks, Redux, Craco, Axios,\n' +
        'React-leaflet, React Helmet, Material UI, date-fns;\n' +
        'Responsibilities: Developing new features, fixing minor bugs.\n' +
        'Participating in daily meetings and problem discussions;',
    }
  },
  {
    id: 2,
    image: '/dog.jpg',
    name: 'Bob',
    surname: 'Rain',
    email: 'bob@example.com',
    position: EPosition.FE,
    experience: '3',
    skills: ['React', 'Type Script'],
    socials: [
      {type: ESocialType.TELEGRAM, href: "https://t.me/kushchik"},
      {type: ESocialType.MAIL, href: "mailto:okushchik@gmail.com"},
      {type: ESocialType.PHONE, href: "tel:+380664266500"},
      {type: ESocialType.GOOGLECHAT, href: "/"}
    ],
    status: EWorkStatus.FULL,
    cv: {
      technicalExpertise: '4+ years of experience in Web Development;\n' +
        'Adhering to clean code principles and best development practices,\n' +
        'including object-oriented design, refactoring, design patterns, and\n' +
        'continuous integration.\n' +
        'Skilled in TypeScript/JavaScript development, with experience in building\n' +
        'responsive and user-friendly interfaces.\n' +
        'Knowledgeable in popular front-end frameworks and libraries.\n' +
        'Solid understanding of the Software Development Lifecycle.',
      toolsAndFrameworks: 'General: React (Redux/Hooks/ContextAPI/Next.js), REST API, Graphql,\n' +
        'ECMAScript, TypeScript, Semantic HTML, Nunjucks;\n' +
        'Styling: BEM, SCSS, Bootstrap, Tailwind, styled-components;\n' +
        'Utils: Axios, Formik, Redux-Form, Moment, Redux Toolkit;\n' +
        'Auth: SSO;\n' +
        'Databases: SQL;\n' +
        'Routing: React-Router;\n' +
        'Build Tools: Webpack, Gulp, Vite, npm;\n' +
        'Version Control: GitHub, GitLab, Bitbucket;\n' +
        'ALM: JIRA, Trello;\n' +
        'Additional exp: Animations, Web Accessibility;',
      communication: 'Good command of English (both written and verbal);\n' +
        'Ability to communicate with key roles outside of the engineering team:\n' +
        'product management, engineering management, DevOps, tech support,\n' +
        'etc.;\n' +
        'Ability to provide tech guidance and mentoring to less experienced team\n' +
        'members, enforce good coding practices through code reviews and\n' +
        'mentoring. Ability to "own" the problem;\n' +
        'Ability to identify and escalate potential issues to the project leadership\n' +
        'and suggest efficient workable solutions;\n' +
        'Ability to effectively transfer knowledge within the team;',
      projects: 'Dashboard\n' +
        'System that helps developers to create notes and share with the team;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, TypeScript, Redux Toolkit, Tailwind;\n' +
        'Responsibilities: Developing new features, fixing minor bugs,\n' +
        'participating in daily meetings and problem discussions;\n' +
        'Portfolio for Media Team\n' +
        'Web-site with a lot of different animations;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: Wordpress, Semantic HTML, ECMAScript, BEM, SCSS,\n' +
        'AnimeJs, with sliders and motions;\n' +
        'Responsibilities: Developing mark up with animations and masks.\n' +
        'Creating responsive design for all devices. Participating in daily meetings\n' +
        'and problem discussions;\n' +
        '\n' +
        'Art Centere platform\n' +
        'Online platform for organizations involved in hosting events, classes,\n' +
        'sessions, and workshops. The system includes scheduling, event\n' +
        'discovery page, and the ability to authenticate and register for events;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, React-router, React-hooks, Redux, Craco, Axios,\n' +
        'React-leaflet, React Helmet, Material UI, date-fns;\n' +
        'Responsibilities: Developing new features, fixing minor bugs.\n' +
        'Participating in daily meetings and problem discussions;',
    }
  },
  {
    id: 3,
    image: '/photoStatic.jpg',
    name: 'Charlie',
    surname: 'Charld',
    email: 'charlie@example.com',
    position: EPosition.QA,
    experience: '3',
    skills: [],
    socials: [
      {type: ESocialType.TELEGRAM, href: "https://t.me/kushchik"},
      {type: ESocialType.MAIL, href: "mailto:okushchik@gmail.com"},
      {type: ESocialType.PHONE, href: "tel:+380664266500"},
      {type: ESocialType.GOOGLECHAT, href: "/"}
    ],
    status: EWorkStatus.HALF,
    cv: {
      technicalExpertise: '4+ years of experience in Web Development;\n' +
        'Adhering to clean code principles and best development practices,\n' +
        'including object-oriented design, refactoring, design patterns, and\n' +
        'continuous integration.\n' +
        'Skilled in TypeScript/JavaScript development, with experience in building\n' +
        'responsive and user-friendly interfaces.\n' +
        'Knowledgeable in popular front-end frameworks and libraries.\n' +
        'Solid understanding of the Software Development Lifecycle.',
      toolsAndFrameworks: 'General: React (Redux/Hooks/ContextAPI/Next.js), REST API, Graphql,\n' +
        'ECMAScript, TypeScript, Semantic HTML, Nunjucks;\n' +
        'Styling: BEM, SCSS, Bootstrap, Tailwind, styled-components;\n' +
        'Utils: Axios, Formik, Redux-Form, Moment, Redux Toolkit;\n' +
        'Auth: SSO;\n' +
        'Databases: SQL;\n' +
        'Routing: React-Router;\n' +
        'Build Tools: Webpack, Gulp, Vite, npm;\n' +
        'Version Control: GitHub, GitLab, Bitbucket;\n' +
        'ALM: JIRA, Trello;\n' +
        'Additional exp: Animations, Web Accessibility;',
      communication: 'Good command of English (both written and verbal);\n' +
        'Ability to communicate with key roles outside of the engineering team:\n' +
        'product management, engineering management, DevOps, tech support,\n' +
        'etc.;\n' +
        'Ability to provide tech guidance and mentoring to less experienced team\n' +
        'members, enforce good coding practices through code reviews and\n' +
        'mentoring. Ability to "own" the problem;\n' +
        'Ability to identify and escalate potential issues to the project leadership\n' +
        'and suggest efficient workable solutions;\n' +
        'Ability to effectively transfer knowledge within the team;',
      projects: 'Dashboard\n' +
        'System that helps developers to create notes and share with the team;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, TypeScript, Redux Toolkit, Tailwind;\n' +
        'Responsibilities: Developing new features, fixing minor bugs,\n' +
        'participating in daily meetings and problem discussions;\n' +
        'Portfolio for Media Team\n' +
        'Web-site with a lot of different animations;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: Wordpress, Semantic HTML, ECMAScript, BEM, SCSS,\n' +
        'AnimeJs, with sliders and motions;\n' +
        'Responsibilities: Developing mark up with animations and masks.\n' +
        'Creating responsive design for all devices. Participating in daily meetings\n' +
        'and problem discussions;\n' +
        '\n' +
        'Art Centere platform\n' +
        'Online platform for organizations involved in hosting events, classes,\n' +
        'sessions, and workshops. The system includes scheduling, event\n' +
        'discovery page, and the ability to authenticate and register for events;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, React-router, React-hooks, Redux, Craco, Axios,\n' +
        'React-leaflet, React Helmet, Material UI, date-fns;\n' +
        'Responsibilities: Developing new features, fixing minor bugs.\n' +
        'Participating in daily meetings and problem discussions;',
    }
  },
  {
    id: 4,
    image: '/dog.jpg',
    name: 'Alex',
    surname: 'Vent',
    email: 'alex@example.com',
    position: EPosition.DESIGNER,
    experience: '3',
    skills: [],
    socials: [
      {type: ESocialType.TELEGRAM, href: "https://t.me/kushchik"},
      {type: ESocialType.MAIL, href: "mailto:okushchik@gmail.com"},
      {type: ESocialType.PHONE, href: "tel:+380664266500"},
      {type: ESocialType.GOOGLECHAT, href: "/"}],
    status: EWorkStatus.HALF,
    cv: {
      technicalExpertise: '4+ years of experience in Web Development;\n' +
        'Adhering to clean code principles and best development practices,\n' +
        'including object-oriented design, refactoring, design patterns, and\n' +
        'continuous integration.\n' +
        'Skilled in TypeScript/JavaScript development, with experience in building\n' +
        'responsive and user-friendly interfaces.\n' +
        'Knowledgeable in popular front-end frameworks and libraries.\n' +
        'Solid understanding of the Software Development Lifecycle.',
      toolsAndFrameworks: 'General: React (Redux/Hooks/ContextAPI/Next.js), REST API, Graphql,\n' +
        'ECMAScript, TypeScript, Semantic HTML, Nunjucks;\n' +
        'Styling: BEM, SCSS, Bootstrap, Tailwind, styled-components;\n' +
        'Utils: Axios, Formik, Redux-Form, Moment, Redux Toolkit;\n' +
        'Auth: SSO;\n' +
        'Databases: SQL;\n' +
        'Routing: React-Router;\n' +
        'Build Tools: Webpack, Gulp, Vite, npm;\n' +
        'Version Control: GitHub, GitLab, Bitbucket;\n' +
        'ALM: JIRA, Trello;\n' +
        'Additional exp: Animations, Web Accessibility;',
      communication: 'Good command of English (both written and verbal);\n' +
        'Ability to communicate with key roles outside of the engineering team:\n' +
        'product management, engineering management, DevOps, tech support,\n' +
        'etc.;\n' +
        'Ability to provide tech guidance and mentoring to less experienced team\n' +
        'members, enforce good coding practices through code reviews and\n' +
        'mentoring. Ability to "own" the problem;\n' +
        'Ability to identify and escalate potential issues to the project leadership\n' +
        'and suggest efficient workable solutions;\n' +
        'Ability to effectively transfer knowledge within the team;',
      projects: 'Dashboard\n' +
        'System that helps developers to create notes and share with the team;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, TypeScript, Redux Toolkit, Tailwind;\n' +
        'Responsibilities: Developing new features, fixing minor bugs,\n' +
        'participating in daily meetings and problem discussions;\n' +
        'Portfolio for Media Team\n' +
        'Web-site with a lot of different animations;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: Wordpress, Semantic HTML, ECMAScript, BEM, SCSS,\n' +
        'AnimeJs, with sliders and motions;\n' +
        'Responsibilities: Developing mark up with animations and masks.\n' +
        'Creating responsive design for all devices. Participating in daily meetings\n' +
        'and problem discussions;\n' +
        '\n' +
        'Art Centere platform\n' +
        'Online platform for organizations involved in hosting events, classes,\n' +
        'sessions, and workshops. The system includes scheduling, event\n' +
        'discovery page, and the ability to authenticate and register for events;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, React-router, React-hooks, Redux, Craco, Axios,\n' +
        'React-leaflet, React Helmet, Material UI, date-fns;\n' +
        'Responsibilities: Developing new features, fixing minor bugs.\n' +
        'Participating in daily meetings and problem discussions;',
    }
  },
  {
    id: 5,
    image: '/dog.jpg',
    name: 'Alex',
    surname: 'Vent',
    email: 'alex@example.com',
    position: EPosition.DESIGNER,
    experience: '3',
    skills: [],
    socials: [
      {type: ESocialType.TELEGRAM, href: "https://t.me/kushchik"},
      {type: ESocialType.MAIL, href: "mailto:okushchik@gmail.com"},
      {type: ESocialType.PHONE, href: "tel:+380664266500"},
      {type: ESocialType.GOOGLECHAT, href: "/"}],
    status: EWorkStatus.HALF,
    cv: {
      technicalExpertise: '4+ years of experience in Web Development;\n' +
        'Adhering to clean code principles and best development practices,\n' +
        'including object-oriented design, refactoring, design patterns, and\n' +
        'continuous integration.\n' +
        'Skilled in TypeScript/JavaScript development, with experience in building\n' +
        'responsive and user-friendly interfaces.\n' +
        'Knowledgeable in popular front-end frameworks and libraries.\n' +
        'Solid understanding of the Software Development Lifecycle.',
      toolsAndFrameworks: 'General: React (Redux/Hooks/ContextAPI/Next.js), REST API, Graphql,\n' +
        'ECMAScript, TypeScript, Semantic HTML, Nunjucks;\n' +
        'Styling: BEM, SCSS, Bootstrap, Tailwind, styled-components;\n' +
        'Utils: Axios, Formik, Redux-Form, Moment, Redux Toolkit;\n' +
        'Auth: SSO;\n' +
        'Databases: SQL;\n' +
        'Routing: React-Router;\n' +
        'Build Tools: Webpack, Gulp, Vite, npm;\n' +
        'Version Control: GitHub, GitLab, Bitbucket;\n' +
        'ALM: JIRA, Trello;\n' +
        'Additional exp: Animations, Web Accessibility;',
      communication: 'Good command of English (both written and verbal);\n' +
        'Ability to communicate with key roles outside of the engineering team:\n' +
        'product management, engineering management, DevOps, tech support,\n' +
        'etc.;\n' +
        'Ability to provide tech guidance and mentoring to less experienced team\n' +
        'members, enforce good coding practices through code reviews and\n' +
        'mentoring. Ability to "own" the problem;\n' +
        'Ability to identify and escalate potential issues to the project leadership\n' +
        'and suggest efficient workable solutions;\n' +
        'Ability to effectively transfer knowledge within the team;',
      projects: 'Dashboard\n' +
        'System that helps developers to create notes and share with the team;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, TypeScript, Redux Toolkit, Tailwind;\n' +
        'Responsibilities: Developing new features, fixing minor bugs,\n' +
        'participating in daily meetings and problem discussions;\n' +
        'Portfolio for Media Team\n' +
        'Web-site with a lot of different animations;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: Wordpress, Semantic HTML, ECMAScript, BEM, SCSS,\n' +
        'AnimeJs, with sliders and motions;\n' +
        'Responsibilities: Developing mark up with animations and masks.\n' +
        'Creating responsive design for all devices. Participating in daily meetings\n' +
        'and problem discussions;\n' +
        '\n' +
        'Art Centere platform\n' +
        'Online platform for organizations involved in hosting events, classes,\n' +
        'sessions, and workshops. The system includes scheduling, event\n' +
        'discovery page, and the ability to authenticate and register for events;\n' +
        'Role: Frontend Developer;\n' +
        'Technologies: React, React-router, React-hooks, Redux, Craco, Axios,\n' +
        'React-leaflet, React Helmet, Material UI, date-fns;\n' +
        'Responsibilities: Developing new features, fixing minor bugs.\n' +
        'Participating in daily meetings and problem discussions;',
    }
  },
];
export const constStatusChartFrontend:TWorkStatusChart[] = [
  { name: EWorkStatus.FULL, value: 20, color: 'red' },
  { name: EWorkStatus.HALF, value: 30, color: 'yellow' },
  { name: EWorkStatus.EMPTY, value: 30, color: 'green' },
]
export const constStatusChartBackend:TWorkStatusChart[] = [
  { name: EWorkStatus.FULL, value: 30, color: 'red' },
  { name: EWorkStatus.HALF, value: 30, color: 'yellow' },
  { name: EWorkStatus.EMPTY, value: 10, color: 'green' },
]
export const constStatusChartDesigners:TWorkStatusChart[] = [
  { name: EWorkStatus.FULL, value: 40, color: 'red' },
  { name: EWorkStatus.HALF, value: 15, color: 'yellow' },
  { name: EWorkStatus.EMPTY, value: 10, color: 'green' },
]
export const technologiesChartFrontend:TTechnologiesChart[] = [
  {
    name: 'React',
    value: 30,
  },
  {
    name: 'Angular',
    value: 10,
  },
  {
    name: 'Type Script',
    value: 35,
  },
  {
    name: 'Next JS',
    value: 10,
  }
];
export const technologiesChartBackend:TTechnologiesChart[]  = [
  {
    name: 'React',
    value: 30,
  },
  {
    name: 'Angular',
    value: 10,
  },
  {
    name: 'Type Script',
    value: 35,
  },
  {
    name: 'Next JS',
    value: 10,
  }
];
export const skills = ['React','Angular','Next JS','Type Script']
export const announcement = [
  {
    id: 1,
    image: '/dog.jpg',
    date: '15 November',
    title: 'Conference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium\n' +
      '        alias assumenda harum, mollitia nihil omnis pariatur quisquam, rem sed, similique sint voluptatum. At deserunt\n' +
      '        dolore hic inventore laudantium modi nam ut voluptate? Doloremque enim ipsam molestias nihil, rem\n' +
      '        voluptatum?'
  },
  {
    id: 2,
    image: '/dog.jpg',
    date: '15 November',
    title: 'Conference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium\n' +
      '        alias assumenda harum, mollitia nihil omnis pariatur quisquam, rem sed, similique sint voluptatum. At deserunt\n' +
      '        dolore hic inventore laudantium modi nam ut voluptate? Doloremque enim ipsam molestias nihil, rem\n' +
      '        voluptatum?'
  },
  {
    id: 3,
    image: '/dog.jpg',
    date: '15 November',
    title: 'Conference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium\n' +
      '        alias assumenda harum, mollitia nihil omnis pariatur quisquam, rem sed, similique sint voluptatum. At deserunt\n' +
      '        dolore hic inventore laudantium modi nam ut voluptate? Doloremque enim ipsam molestias nihil, rem\n' +
      '        voluptatum?'
  },
  {
    id: 4,
    image: '/dog.jpg',
    date: '15 November',
    title: 'Conference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium\n' +
      '        alias assumenda harum, mollitia nihil omnis pariatur quisquam, rem sed, similique sint voluptatum. At deserunt\n' +
      '        dolore hic inventore laudantium modi nam ut voluptate? Doloremque enim ipsam molestias nihil, rem\n' +
      '        voluptatum?'
  }
]
export const education = [
  {
    id:1,
    title: 'React',
    links: [
      {
        id: 1,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 2,
        linkTitle: 'React Hook Form',
        description: 'About React Table',
        link: 'https://react-hook-form.com/'
      },
      {
        id: 3,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 4,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      }
    ]
  },
  {
    id:2,
    title: 'Angular',
    links: [
      {
        id: 1,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 2,
        linkTitle: 'React Hook Form',
        description: 'About React Table',
        link: 'https://react-hook-form.com/'
      },
      {
        id: 3,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 4,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      }
    ]
  },
  {
    id:3,
    title: 'Type Script',
    links: [
      {
        id: 1,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 2,
        linkTitle: 'React Hook Form',
        description: 'About React Table',
        link: 'https://react-hook-form.com/'
      },
      {
        id: 3,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      },
      {
        id: 4,
        linkTitle: 'React Table',
        description: 'About React Table',
        link: 'https://tanstack.com/table/v7'
      }
    ]
  }
]


