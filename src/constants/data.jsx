import Todo from "../assets/todo.png";
import Weather from "../assets/weather-app.png";
import tictactoe from "../assets/TicTacToe.png";
import Asus from "../assets/AsusROG.png";
import Portfolio from "../assets/Portfolio.png";
import CSTECH from "../assets/CSTech.png";
import Galaxy from "../assets/Galaxy.png";

export const EXPERIENCE = [
  {
    year: "Feb 2025 - May 2025",
    role: "Web Developer Intern",
    company: "CS Tech AI",
    Image: CSTECH,
    link: "https://cstech.ai",
    description: `Collaborated with a team to build a project management tool enabling managers to track resource status, manage timesheets, and allocate tasks.
    Contributed to designing and developing features inspired by platforms like ClickUp and Teamwork to improve workflow efficiency. 
    Assisted in implementing a centralized dashboard for real-time visibility into team performance `,
    technologies: ["JavaScript", "React.js", "shadcn", "Rest API"]
  },
  {
    year: "June 2023 - Aug 2023",
    role: "Frontend Developer Intern",
    company: "Galaxy Technovation LLP",
    Image: Galaxy,
    description: `Developed an AI-powered Image Text Extractor and Organizer using Python and JavaScript.
    Integrated OCR with automation workflows to streamline data extraction and storage.
    Improved document processing efficiency by 30% using performance-tuned algorithms and modern libraries.`,
    technologies: ["JavaScript", "Python", "Django" ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio built using React and Tailwind CSS, featuring smooth animations with Framer Motion. It showcases my technical skills, project highlights, and work experience in a clean, responsive design with intuitive navigation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Todo App",
    image: Todo,
    description:
      "A simple and efficient task management app built with React. Users can add, view, and delete tasks, with all data managed through a JSON server. The app helps users stay organized by providing a clean UI and responsive design.",
    technologies: ["JavaScript", "React", "JSON Server"],
  },
  {
    title: "Weather App",
    image: Weather,
    description:
      "A web application built using HTML, CSS, and JavaScript that fetches real-time weather data from a public API. Users can search for any location and view current weather conditions and multi-day forecasts.",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description:
      "A classic 2-player Tic Tac Toe game built using HTML, CSS, and JavaScript. The game features a simple UI and logic for win detection, allowing users to play in turns and track their moves on a 3x3 grid.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
