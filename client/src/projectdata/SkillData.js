// techData.js

// React Icon Imports
import {
  SiCplusplus,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiScikitlearn,
  SiSpringboot,
  SiExpress,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiPytest,
  SiIntellijidea,
  SiNetlify,
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiNodejsSmall,
  DiHeroku,
} from "react-icons/di";
import { IoLogoCss3, IoGitBranchOutline } from "react-icons/io5";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineDocker, AiOutlineKubernetes } from "react-icons/ai";

const techData = {
  programmingLanguage: {
    title: "PROGRAMMING LANGUAGE",
    about: [
      { name: "C++", icon: SiCplusplus, color: "#00599C", darkColor: "#66B2FF" },
      { name: "Java", icon: FaJava, color: "#007396", darkColor: "#00B0FF" },
      { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E", darkColor: "#FFE873" },
      { name: "Python", icon: DiPython, color: "#3776AB", darkColor: "#4B8BBE" },
    ],
  },
  Frontend: {
    title: "FRONTEND",
    about: [
      { name: "HTML", icon: DiHtml5, color: "#E34F26", darkColor: "#FF7043" },
      { name: "CSS", icon: IoLogoCss3, color: "#1572B6", darkColor: "#40C4FF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", darkColor: "#67E8F9" },
      { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E", darkColor: "#FFE873" },
      { name: "React", icon: FaReact, color: "#61DAFB", darkColor: "#00D8FF" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", darkColor: "#B084F9" },
    ],
  },
  BACKEND: {
    title: "BACKEND",
    about: [
      { name: "Node.js", icon: DiNodejsSmall, color: "#339933", darkColor: "#8BC34A" },
      { name: "Express.js", icon: SiExpress, color: "#000000", darkColor: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", darkColor: "#AED581" },
      { name: "Flask", icon: BiLogoFlask, color: "#000000", darkColor: "#ffffff" },
    ],
  },
  DATABASE: {
    title: "DATABASE",
    about: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", darkColor: "#8BC34A" },
      { name: "MySQL", icon: TbBrandMysql, color: "#4479A1", darkColor: "#90CAF9" },
      { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791", darkColor: "#64B5F6" },
      { name: "Firebase", icon: RiFirebaseFill, color: "#FFCA28", darkColor: "#FFE57F" },
    ],
  },
  MACHINELEARNING: {
    title: "MACHINE LEARNING",
    about: [
      { name: "Python", icon: DiPython, color: "#3776AB", darkColor: "#4B8BBE" },
      { name: "NumPy", icon: SiNumpy, color: "#013243", darkColor: "#81D4FA" },
      { name: "Pandas", icon: SiPandas, color: "#150458", darkColor: "#B39DDB" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", darkColor: "#FFB74D" },
    ],
  },
  VersionControl: {
    title: "VERSION CONTROL",
    about: [
      { name: "Git", icon: IoGitBranchOutline, color: "#F05032", darkColor: "#FF8A65" },
      { name: "GitHub", icon: LuGithub, color: "#181717", darkColor: "#ffffff" },
    ],
  },
  Testing_Debugging: {
    title: "TESTING & DEBUGGING",
    about: [
      { name: "Postman", icon: SiPostman, color: "#FF6C37", darkColor: "#FF8A65" },
      { name: "Pytest", icon: SiPytest, color: "#0A9EDC", darkColor: "#4FC3F7" },
    ],
  },
  Code_Editors_IDEs: {
    title: "CODE EDITORS",
    about: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC", darkColor: "#82AAFF" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#000000", darkColor: "#ffffff" },
    ],
  },
  Deployment: {
    title: "DEPLOYMENT",
    about: [
      { name: "Docker", icon: AiOutlineDocker, color: "#2496ED", darkColor: "#81D4FA" },
      { name: "Kubernetes", icon: AiOutlineKubernetes, color: "#326CE5", darkColor: "#90CAF9" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7", darkColor: "#5DF2D6" },
      { name: "Heroku", icon: DiHeroku, color: "#430098", darkColor: "#B388FF" },
    ],
  },
};


export default techData;
