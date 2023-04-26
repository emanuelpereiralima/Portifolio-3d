import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  dotnet,
  azure,
  python,
  tailwind,
  csharp,
  git,
  figma,
  blender,
  unity,
  docker,
  accenture,
  rural,
  saga,
  cicero,
  reformei,
  replit,
  globalgamejam,
  threejs,
  david,
  janaina
} from "../assets";
import i18next from "../i18n";

export const navLinks = [
  {
    id: "about",
    title:i18next.t('about'),
  },
  {
    id: "work",
    title: i18next.t('work'),
  },
  {
    id: "contact",
    title: i18next.t('contact'),
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".Net Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "3D Modeler",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".Net",
    icon: dotnet,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: i18next.t('experience title 1'),
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: i18next.t('experience date 1'),
    points: [
      i18next.t('experience points 1.1'),
      i18next.t('experience points 1.2'),
      i18next.t('experience points 1.3'),
      i18next.t('experience points 1.4')
    ],
  },
  {
    title: "PlayGame",
    company_name: "Saga Art School",
    icon: saga,
    iconBg: "#383E56",
    date: i18next.t('experience date 2'),
    points: [
      i18next.t('experience points 2.1'),
      i18next.t('experience points 2.2'),
      i18next.t('experience points 2.3'),
      i18next.t('experience points 2.4')
    ],
  },
  {
    title: i18next.t('experience title 3'),
    company_name: "Universidade Federal Rural De Pernambuco",
    icon: rural,
    iconBg: "#383E56",
    date:  i18next.t('experience date 3'),
    points: [
      i18next.t('experience points 3.1'),
      i18next.t('experience points 3.2'),
      i18next.t('experience points 3.3')
    ],
  },
  {
    title: i18next.t('experience title 4'),
    company_name: "Escola Técnica Estadual Cícero Dias",
    icon: cicero,
    iconBg: "#383E56",
    date: i18next.t('experience date 4'),
    points: [
      i18next.t('experience points 4.1'),
      i18next.t('experience points 4.2'),
      i18next.t('experience points 4.3')
    ],
  },
];

const testimonials = [
  {
    testimonial:
    i18next.t('testimonials 1'),
    name: "David Silva",
    designation: "Consulting Engineer",
    company: "Accenture",
    image: david,
  },
  /*{
    testimonial:
      "",
    name: "Janaína Ramos",
    designation: "Software Engineer",
    company: "Accenture",
    image: janaina,
  },*/
];

const projects = [
  {
    name: "Reformei",
    description:
    i18next.t('project 1 description'),
    tags: [
      {
        name: "Adobe XD",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: reformei,
    source_code_link: "https://www.behance.net/gallery/109006007/Prototipo-Reformei",
  },
  {
    name: "Python Projects",
    description:
    i18next.t('project 2 description'),
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "pink-text-gradient",
      },
    ],
    image: replit,
    source_code_link: "https://replit.com/@manopereira",
  },
  {
    name: "Global Game Jam Projects",
    description:
    i18next.t('project 3 description'),
    tags: [
      {
        name: "Csharp",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: globalgamejam,
    source_code_link: "https://globalgamejam.org/2014/games/beside-himself",
  },
];

export { services, technologies, experiences, testimonials, projects };
