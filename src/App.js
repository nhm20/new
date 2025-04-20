import { useState, useEffect } from "react";
import { FaPython, FaGraduationCap, FaCertificate } from "react-icons/fa";
import {
  SiMicrosoftazure,
  SiHackerrank,
  SiUdemy,
  SiCoursera,
} from "react-icons/si";
import {
  FaUsers,
  FaTrophy,
  FaRocket,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "./pic.png";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiMysql,
  SiAutodesk,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  MdGroups,
  MdPsychologyAlt,
  MdManageAccounts,
  MdSecurity,
} from "react-icons/md";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: darkMode ? "#0f0f0f" : "#ffffff" },
    particles: {
      number: { value: 50 },
      size: { value: 4 },
      move: { enable: true, speed: 1 },
      links: { enable: true, color: "#00ffff" },
      color: { value: "#00ffff" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl animate-pulse">
        Fetching bits and bytes..
      </div>
    );
  }

  const blogs = [
    {
      title: "5 React Tricks You Probably Didn't Know",
      summary:
        "Discover powerful but lesser-known tricks in React to optimize your apps.",
      link: "https://medium.com/@likhithgolagani1294/5-react-tricks-you-probably-didnt-know-ec39d262fcf8",
    },
    {
      title: "Getting Started with OpenCV in Python",
      summary:
        "A beginner-friendly guide to implementing computer vision using Python and OpenCV.",
      link: "https://medium.com/@likhithgolagani1294/getting-started-with-opencv-in-python-1a83f9225c82",
    },
  ];

  const projects = [
    {
      name: "RedBus Clone",
      description:
        "A full-stack clone of the RedBus platform allowing users to search and book bus tickets.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/sailikhith1294/redbus",
    },
    {
      name: "Blogging App Frontend",
      description:
        "Frontend of a full-featured blogging platform with authentication and rich text editing.",
      tech: ["React", "Tailwind CSS", "REST API"],
      link: "https://github.com/sailikhith1294/Blogging-app-front-end",
    },
    {
      name: "Rail Madad – AI-Driven Complaint Automation",
      description:
        "Automated 85% of complaint resolution processes, reducing resolution time by 40%.",
      tech: [
        "Python",
        "Node.js",
        "React.js",
        "HTML",
        "CSS",
        "MySQL",
        "AWS",
        "Google Cloud",
      ],
      link: "https://github.com/sailikhith1294/redbus",
    },
    {
      name: "Face & Eye Detector",
      description:
        "Python application using OpenCV to detect human faces and eyes in real time.",
      tech: ["Python", "OpenCV"],
      link: "https://github.com/sailikhith1294/Python-code-for-face-eye-detector",
    },
  ];

  const certificates = [
    {
      name: "Python for Data Science – IBM",
      icon: <FaPython />,
    },
    {
      name: "Web Development – Udemy",
      icon: <SiUdemy />,
    },
    {
      name: "Introduction to C++ – Coursera",
      icon: <SiCoursera />,
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      icon: <SiMicrosoftazure />,
    },
    {
      name: "HackerRank: Problem Solving (Intermediate)",
      icon: <SiHackerrank />,
    },
  ];

  const achievements = [
    {
      title: "Startup Funding – EasyCabs",
      description:
        "Led a team of five developers to secure ₹1,00,000 in funding for EasyCabs.",
      icon: <FaRocket />,
    },
    {
      title: "Smart India Hackathon 2024 – Finalist",
      description:
        "Participated in SIH 2024 - Quantum Quest, leading Rail Madad development.",
      icon: <FaTrophy />,
    },
    {
      title: "Event Manager – Gaming Tournament",
      description:
        "Managed a gaming event with 100+ participants, achieving 30% engagement increase.",
      icon: <FaGamepad />,
    },
  ];

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.3 },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: { duration: 1 },
  };

  return (
    <Router>
      <div
        className={`${
          darkMode ? "bg-transparent text-white" : "bg-transparent text-black"
        } transition-all duration-500 min-h-screen scroll-smooth font-sans relative`}
      >
        <Particles init={particlesInit} options={particlesOptions} />

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 px-6 py-4 flex justify-between items-center shadow-xl border-b border-gray-700">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold tracking-wide"
          >
            Sai Likhith Golagani
          </motion.h1>
          <motion.div
            className="space-x-4 text-sm font-medium"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#certificates" className="hover:text-cyan-400 transition">
              Certificates
            </a>
            <a href="#achievements" className="hover:text-cyan-400 transition">
              Achievements
            </a>
            <a href="#blogs" className="hover:text-cyan-400 transition">
              Blogs
            </a>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-cyan-600 px-3 py-1.5 rounded-full hover:bg-cyan-700 transition text-white"
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </motion.div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <motion.section
                  className="pt-36 pb-16 text-center"
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.img
                      src={profile}
                      alt="Profile"
                      className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 shadow-xl cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <div className="text-center md:text-left">
                      <h1 className="text-6xl md:text-7xl font-extrabold mb-2 leading-tight tracking-wide">
                        Hi, I'm{" "}
                        <motion.span
                          className="inline-block text-cyan-400 glow-text"
                          initial={{ rotateY: 90, opacity: 0 }}
                          animate={{ rotateY: 0, opacity: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          whileHover={{ rotateX: 15, rotateY: 10, scale: 1.1 }}
                        >
                          Sai Likhith
                        </motion.span>
                      </h1>
                      <p className="text-xl md:text-2xl mt-4 text-cyan-300 font-medium">
                        <span className="typewriter-loop">
                          Full Stack Developer | Tech Enthusiast | Problem
                          Solver
                        </span>
                      </p>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition shadow-lg"
                      >
                        View Resume
                      </a>
                    </div>
                  </div>
                </motion.section>

                {/* All other sections remain the same as before */}
                <motion.section
                  id="about"
                  className="px-6 pt-10 pb-20 text-center"
                  {...sectionVariants}
                >
                  {/* About section content */}
                </motion.section>

                {/* Include all other sections here */}
              </>
            }
          />
        </Routes>

        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
}
