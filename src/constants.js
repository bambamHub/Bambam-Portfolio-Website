// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import mnnitLogo from './assets/education_logo/MNNIT_logo.jpg';
import dbLogo from './assets/education_logo/DB_PUBLIC_LOGO.jpg';
import samLogo from './assets/education_logo/sambhawana_logo.png';

// Project Section Logo's
import StudyNotionLogo from './assets/work_logo/StudyNotion.png';
import PrescriptoLogo from './assets/work_logo/Prescripto.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "June 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mnnitLogo,
      school: "Motilal Nehru National Institute of Technology, Allahabad",
      date: "Nov 2022 - May 2026",
      grade: "8.21 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Chemical Engineering at Motilal Nehru National Institute of Technology (MNNIT), Allahabad. Along with my core engineering studies, I have developed a strong foundation in programming, software development, and computer science fundamentals. I have learned Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development, and Software Engineering, and have actively participated in workshops and technical events that enhanced my skills and overall growth.",
      degree: "Bachelor of Technology - B.Tech (Chemical Engineering)",
    },
    {
      id: 1,
      img: dbLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2019 - March 2021",
      grade: "90%",
      desc: "I completed my class 12 education from D.B. Public School, Ara , Bhojpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: samLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2018 - March 2019",
      grade: "93.4%",
      desc: "I completed my class 10 education from Sambhawana Awasiya Uchcha Vidyalaya, Ara, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "StudyNotion EdTech App",
      description:
        "An Ed-Tech web app enhancing education through interactive learning and resources.",
      image: StudyNotionLogo ,
      tags: ["React JS", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/bambamHub/StudyNotion-Hosting",
      webapp: "https://studynotion-frontend-bambam.vercel.app/",
    },
    {
      id: 1,
      title: "Prescripto Doctor Appointment App",
      description:
        "A healthcare web application enabling seamless doctor appointment booking and virtual consultations.",
      image: PrescriptoLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/bambamHub/prescripto-full-stack",
      webapp: "https://prescripto-frontend-bambam.vercel.app/",
    },
    
  ];  