import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import NextGPA from '../assets/NextGPA.avif';
import PetFeeder from '../assets/PetFeeder.avif';
import Portfolio from '../assets/Portfolio.avif';
import Hangman from '../assets/Hangman.avif';
import Sports from '../assets/Sports.avif';
import OS from '../assets/OS.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I aim to combine software engineering with intelligent systems to build scalable, high-performance web applications and automated solution architechtures.'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side logic and REST APIs.',
    tags: ['Python', 'Flask', 'RESTful APIs']
  },
   {
    title: 'AI Integration & ML',
    icon: FaRobot,
    description: 'Integrating machine learning models and intelligent workflows into web apps.',
    tags: ['Python', 'Machine Learning', 'Model Deployment', 'Data Analysis']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing structured database schemas and optimizing SQL queries.',
    tags: ['PostgreSQL', 'MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['Flutter', 'Dart']
  },
 
  {
    title: 'Tools & Workflow',
    icon: FaTools,
    description: 'Essential tools and practices used for efficient software development..',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman']
  }
];



export const projects = [
 {
    title: "NextGPA AI",
    role: "Full-Stack Developer",
    description: "A web-based machine learning application designed to analyze academic trends and predict student GPA performance based on 15 features.",
    outcome: "Achieved high prediction accuracy and streamlined academic performance tracking.",
    image: NextGPA, // Apni image import match kar lein
    tech: ["React.js", "Python", "Flask", "PostgreSQL"],
    demoLink: "https://ai-student-predictor-2zub.vercel.app/", // Apni live link ya GitHub repo yahan daalein
    codeLink: "https://github.com/SaniahMalik/AI_Student_Predictor"
  },
  {
    title: "Smart Automatic Pet Feeder",
    role: "Full-Stack & IoT Developer",
    description: "An automated pet feeder platform connecting smart hardware with a web interface for automated feeding schedules.",
    outcome: "Successfully automated remote pet care routines with real-time feedback.",
    image: PetFeeder,
    tech: ["React.js", "Python", "Flask", "PostgreSQL", "IoT"],
    demoLink: "https://github.com/SaniahMalik",
    codeLink: "https://github.com/SaniahMalik"
  },
{
    title: "Interactive Developer Portfolio",
    role: "Frontend Developer",
    description: "A modern dark-themed portfolio featuring dynamic UI animations, structured background components, and contact forms.",
    outcome: "Delivered a fully responsive user interface following clean architecture principles.",
    image: Portfolio,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    demoLink: "https://github.com/SaniahMalik",
    codeLink: "https://github.com/SaniahMalik"
  },
  {
  title: "Hangman Game (8086 Assembly)",
  role: "Assembly / Low-Level Developer",
  description: "Built with dynamic string matching, interrupt handling and low-level register management.",
  outcome: "Engineered low-level memory & conditional branching logic with zero higher-level abstraction.",
  image: Hangman, // Apni image reference add karein
  tech: ["8086 Assembly", "emu8086", "COAL"],
  demoLink: "https://github.com/SaniahMalik", 
  codeLink: "https://github.com/SaniahMalik/Hangman-Game-Assembly-emu8086"
},
{
  title: "Sports Club Website",
  role: "Frontend Developer",
  description: "A dynamic web application built with React.js providing sports club management, event scheduling, and member navigation features.",
  outcome: "Delivered a fully responsive and optimized React application for active user engagement.",
  image: Sports, // Iski image import kar ke yahan link karein
  tech: ["React.js", "JavaScript (ES6+)", "CSS3", "HTML5"],
  demoLink: "https://github.com/SaniahMalik",
  codeLink: "https://github.com/SaniahMalik/Sports-Club-Website"
},
  {
  title: "OS Interrupt & Preemption Visualizer",
  role: "Python & Desktop GUI Developer",
  description: "A dark-themed desktop dashboard visualizing real-time Operating System concepts .",
  outcome: "Successfully simulated low-level CPU interrupt processing with a reactive PyQt5 desktop interface.",
  image: OS, // Iski image import kar ke link karein
  tech: ["Python", "PyQt5", "OS", "GUI Architecture"],
  demoLink: "https://github.com/SaniahMalik",
  codeLink: "https://github.com/SaniahMalik/OS-Interrupt-Scheduling-Simulator"
}
];


/* export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
 */
// assets.js mein end par add karein

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mianwali",
    duration: "2023 - Present",
    description: "Covered Data Structures, Web Development, Database Management Systems, Artificial Intelligence and Software Design."
  },
  {
    degree: "ICS",
    institution: "Superior Group of Colleges",
    duration: "2021 - 2023",
    description: "Covered Fundamentals of Computer Science, Basic Programming, Information Technology, and Mathematics."
  }
];

export const certificationData = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2026"
  },
  {
    title: "AI Prompt Engineering & App Building",
    issuer: "Google (Coursera)",
    year: "2026"
  }
];
