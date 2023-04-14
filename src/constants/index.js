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

export const navLinks = [
  {
    id: "about",
    title:"About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
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
    title: "Intern",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "March 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using .NET MVC and other related technologies.",
      "Collaborating with cross-functional teams including designers, test developers to create high-quality products.",
      "Implementing CI/CD in projects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bachelor's in information systems",
    company_name: "Universidade Federal Rural De Pernambuco",
    icon: rural,
    iconBg: "#383E56",
    date: "August 2016 - Present",
    points: [
      "Learn since the basic of programing to document, presenting and make products to make the difference in world.",
      "Using real market problems brought to the classroom context so that we could solve them using the contents seen in the current and previous semesters.",
      "Be able to design, implement, manage and innovate processes involving information systems to solve problems of organizations, government, society and modify the socio-political-economic-scientific context in which it is found.",
    ],
  },
  {
    title: "PlayGame",
    company_name: "Saga Art School",
    icon: saga,
    iconBg: "#383E56",
    date: "January 2019 - February 2021",
    points: [
      "Learning who to develop, document, presenting 2D/3D games using Autodesk Maya and Unreal.",
      "Using photoshop to apply the knowledge of 2d painting.",
      "Texturing of 3d objects with substance painter.",
      "Participating in code and modeling review",
    ],
  },
  {
    title: "Programação de Jogos Digitais",
    company_name: "Escola Técnica Estadual Cícero Dias",
    icon: cicero,
    iconBg: "#383E56",
    date: "January 2012 - December 2014",
    points: [
      "Learning who to develop, document, presenting 2D/3D games using XNA and Unity.",
      "Also creating analogue games and applying the knowledge of game development in competitions around the world.",
      "Developing together with the designer team, learning to cooperate and share knowledge, always seeking to improve the delivered products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Emanuel atuou na equipe de automação na aplicação do DevOps e mostrou ser muito estudioso, responsável com as entregas e passa confiança e segurança nas explicações das atividades realizadas.Tem conhecimento em diferentes linguagens de desenvolvimento (C#, JavaScript, Python),teve uma rápida adaptação em uma área que não conhecia que foi o DevOps possibilitando atuação rápida nas melhorias do time. Como destaque teve a criação de Dashboards no nosso portal de forma independente.",
    name: "David Silva",
    designation: "Consulting Engineer",
    company: "Accenture",
    image: david,
  },
  {
    testimonial:
      "",
    name: "Janaína Ramos",
    designation: "Software Engineer",
    company: "Accenture",
    image: janaina,
  },
];

const projects = [
  {
    name: "Reformei",
    description:
      "Project focused on facilitating service and communication between service providers and customers, with safety and practicality.",
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
      "All my projects made in python, for all kind of solucions",
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
      "The GGJ mission is to empower individuals worldwide to learn, experiment, and create together through the medium of games.",
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
