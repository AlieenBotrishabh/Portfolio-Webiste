import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from "file-saver";
import { motion } from 'framer-motion';
import image from '../assets/A.png';
import image2 from '../assets/A2.png';
import image3 from '../assets/A3.png';
import image4 from '../assets/A4.png';
import image5 from '../assets/A5.png';
import image6 from '../assets/A6.png';
import image7 from '../assets/A7.png';
import html from '../assets/icons8-html-5.svg';
import css from '../assets/icons8-css-logo.svg';
import tailwind from '../assets/icons8-tailwind-css.svg';
import js from '../assets/icons8-javascript.svg';
import ts from '../assets/icons8-typescript.svg';
import react from '../assets/icons8-react.svg';
import nodejs from '../assets/icons8-nodejs.svg';
import express from '../assets/icons8-express-js.svg';
import socket from '../assets/socket_io_logo_icon_144874.svg';
import jwt from '../assets/icons8-jwt.svg';
import graphql from '../assets/icons8-graphql.svg';
import postgresql from '../assets/postgresql-icon.svg';
import mongodb from '../assets/icons8-mongodb.svg';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/form`, formData);

      setMessage(response.data.msg);
  
      // Clear form data
      setFormData({ name: "", email: "" });
  
      // Hide the message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Submission failed. Please try again.");
  
      // Hide the error message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const handleDownload = () => {
    const pdfUrl = "/FAANGPath_Simple_Template (5).pdf";
    saveAs(pdfUrl, "Rishabh_Resume.pdf");
  };

  const [selectedTab, setSelectedTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "HTML", icon: html, description: "Used for static application and structuring"},
      { name: "CSS", icon: css, description: "Used for styling the web apps"},
      { name: "Javascript", icon: js, description: "Used for adding the functionality"},
      { name: "React", icon: react, description: "Building dynamic UI." },
      { name: "Tailwind CSS", icon: tailwind, description: "Utility-first styling." },
      { name: "Typescript", icon: ts, description: "Static typing version of Javascript"}
    ],
    backend: [
      { name: "Node.js", icon: nodejs, description: "Server-side development." },
      { name : "Express.js", icon: express, description: "Framework for Node.js"},
      { name: "Socket.io", icon: socket, description: "Two way communication"},
      { name: "JSON Web Tokens", icon: jwt, description: "For authorized user login"}
    ],
    database: [
      { name: "MongoDB", icon: mongodb, description: "NoSQL Database"},
      { name: "GraphQL", icon: graphql, description: "Query language for NoSQL database"},
      { name: "PostgreSQL", icon: postgresql, description: "Stuctured Query Language"},
    ],
    certifications: [
      { name: "NPTEL Introduction to Intenet of Things", icon: image5, description: "Certified by NPTEL" },
      { name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", icon: image6, description: "Genrative AI Professional certificate"},
    ],
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };
  
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const educationData = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Engineering in Computer Science Engineering",
      school: "Chandigarh University",
      description: "Pursuing a comprehensive computer science degree with focus on software development, algorithms, and system design. Actively involved in coding competitions and tech societies.",
      skills: ["Data Structures", "Algorithms", "System Design", "Database Systems"],
      side: "left"
    },
    {
      year: "2010 - 2020",
      degree: "Higher Secondary Education",
      school: "St. Xavier's Sr. Sec. School",
      description: "Completed 10th grade in ICSE",
      skills: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      side: "right"
    },
  ];

  return (
    <div className="text-white min-h-screen bg-black">
      {/* Header with animation */}


    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background Container */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {/* Your uploaded video - remove the placeholder gradient */}
        {/* <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/6797-196071980.mp4" type="video/mp4" />
          <source src="./6797-196071980.mp4" type="video/mp4" />
          <source src="6797-196071980.mp4" type="video/mp4" />
        </video> */}
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 /20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-xs border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">&lt; &gt;</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 px-4 py-2 rounded-full">
                Home
              </a>
              <a href="#skills" className="text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 px-4 py-2 rounded-full">
                Skills
              </a>
              <a href="#projects" className="text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 px-4 py-2 rounded-full">
                Projects
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:bg-white/10 px-4 py-2 rounded-full">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className={`flex flex-col max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Glass Card Container */}
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
            
            {/* Greeting */}
            <p className={`text-pink-400 text-3xl mb-6 font-medium transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Hey there!, I'm-
            </p>
            
            {/* Name with Gradient */}
            <h1 className={`text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Rishabh Kumar
            </h1>
            
            {/* Title and Description */}
            <div className={`mb-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <span className="text-3xl font-bold text-white block mb-2">A Software Engineer in India</span>
              <span className="text-gray-300 text-xl"> A self-taught developer with an interest in Computer Science.</span>
            </div>
            
            {/* Details with Icons */}
            <div className={`space-y-4 mb-12 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="text-3xl animate-bounce">🚀</span>
                <span className="text-gray-300 text-lg">Currently specializing in Frontend (React) and Backend (NodeJs, ExpressJs, MongoDB) technologies</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎓</span>
                <span className="text-gray-300 text-lg">A CS Student in India</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {/* GitHub Button */}
              <a 
                href="https://github.com/AlieenBotrishabh" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/rishabh-kumar-932692291/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              {/* Email Button */}
              <a 
                href="mailto:rishabhk1324@gmail.com" 
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email
              </a>
              
              {/* Resume Download Button */}
              <a 
                href="../assets/Rishabh Kumar (2).pdf" 
                onClick={handleDownload}
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-xl text-white px-8 py-4 rounded-2xl border border-pink-300/30 hover:from-pink-500 hover:to-purple-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-500/25 group font-semibold"
              >
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements for Extra Visual Appeal */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-80"></div>
      </div>
    </div>


    <motion.section
      className="py-24 relative z-20 text-white overflow-hidden"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Background elements for visual flair */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10"
            style={{
              width: Math.random() * 80 + 30, // Larger, more varied sizes
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150], // Slightly more movement
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1], // More pronounced fade
            }}
            transition={{
              duration: Math.random() * 12 + 18, // Longer, more subtle animation
              repeat: Infinity,
              delay: Math.random() * 25,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Glass Card Container for the entire section content */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            {/* Left Column: About Me Text */}
            <motion.div
              className="md:w-2/3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                className="flex items-center gap-3 text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent"
                variants={slideUp}
              >
                <motion.span
                  className="text-yellow-400 text-5xl md:text-6xl animate-spin-slow" // Larger and custom spin animation
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                >
                  ⚡
                </motion.span>
                About Me
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
                variants={staggerContainer}
              >
                <motion.p variants={slideUp}>
                  Hey! I'm **Rishabh Kumar**. I am passionate about **Software Engineering, DevOps, Cloud, and Database** technologies.
                </motion.p>
                <motion.p variants={slideUp}>
                  I started creating applications using <span className="text-pink-400 font-semibold">frontend and backend</span> technologies back in 2024. From then, I explored how to code myself. Fast-forward to today, I program in various languages and technologies such as <span className="text-pink-400 font-semibold">React, Node.js, Express.js</span>, and <span className="text-pink-400 font-semibold">Socket.io</span>.
                </motion.p>
                <motion.p variants={slideUp}>
                  In my free time, my hobbies include playing music and video games.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Image */}
            <motion.div
              className="md:w-1/3 flex justify-center items-center p-4"
              variants={fadeIn}
            >
              <motion.div
                className="relative w-full max-w-xs md:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-pink-500/50 transition-all duration-500"
                whileHover={{ scale: 1.05, rotate: 3, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <img
                  src='/'
                  alt="Rishabh Kumar Profile"
                  className="w-full h-auto object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
                  // Fallback for image loading errors
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/1E293B/E2E8F0?text=Image+Not+Found"; }}
                />
                {/* Subtle overlay for liquid effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 mix-blend-overlay opacity-75"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section
      className="py-24 relative z-20 text-white"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={slideUp}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 font-light"
            variants={slideUp}
          >
            My academic journey and learning path
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {/* Timeline Line - changed to black transparent */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black/30 rounded-full"
            style={{ height: '100%' }}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Timeline Items */}
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                variants={fadeIn}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1 + index * 0.5,
                  }}
                />

                {/* Content Card */}
                <motion.div
                  className={`w-[45%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20`}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                      item.side === 'left'
                        ? 'right-[-15px] border-l-[15px] border-l-white/10 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent'
                        : 'left-[-15px] border-r-[15px] border-r-white/10 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent'
                    }`} />

                  <div className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <div className="text-cyan-400 text-lg font-medium mb-4">
                    {item.school}
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:border-pink-500/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative max-w-2xl mx-auto mt-16">
          {/* Mobile Timeline Line - changed to black transparent */}
          <motion.div
            className="absolute left-4 top-0 w-1 bg-black/30 rounded-full"
            style={{ height: '100%' }}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Mobile Timeline Items */}
          <motion.div
            className="space-y-12 pl-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeIn}
              >
                {/* Mobile Timeline Dot */}
                <motion.div
                  className="absolute left-[-32px] top-0 transform w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1 + index * 0.5,
                  }}
                />

                {/* Mobile Content Card */}
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <div className="text-cyan-400 text-base font-medium mb-4">
                    {item.school}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20 hover:border-pink-500/50 transition-all duration-300"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>

    <motion.section
      className="py-24 relative z-20"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <div className="container mx-auto px-4">
        {/* Glass Card Container */}
        <div className="w-full max-w-6xl mx-auto p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 md:mb-12 text-center bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Skills
          </motion.h2>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Sidebar Tabs */}
            <div className="flex-shrink-0 md:w-1/4 flex md:flex-col justify-center mb-8 md:mb-0 space-x-2 md:space-x-0 md:space-y-4">
              {Object.keys(skillsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-3 px-6 rounded-full font-semibold transition-all duration-300 transform md:hover:scale-105 ${
                    selectedTab === tab
                      ? "bg-gradient-to-r from-pink-500/80 to-purple-500/80 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Skills Display */}
            <motion.div
              className="md:flex-1"
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {selectedTab === 'certifications' ? (
                // Certifications with full-size images
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsData[selectedTab].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl shadow-xl overflow-hidden cursor-pointer border border-white/10"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={skill.icon}
                        alt={`Certification ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Regular skills with icons, names, and descriptions
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {skillsData[selectedTab].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-16 h-16 mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      />
                      <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                      <p className="text-gray-400">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section
      className="py-24 relative z-20 overflow-hidden"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        {/* Decorative diagonal background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 transform -skew-y-3 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>

        {/* Header and Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent mb-4"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true }}
          >
            All Creative Works.
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg mb-4"
            variants={fadeIn}
            whileInView="visible"
            viewport={{ once: true }}
          >
            Here's some of my projects that I have worked on.
          </motion.p>
          <motion.a
            href="https://github.com/AlieenBotrishabh"
            className="text-pink-400 font-medium inline-block hover:text-pink-300 transition-colors"
            variants={fadeIn}
            whileHover={{ x: 10 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore more →
          </motion.a>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Project Card 1 */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10 relative"
            variants={fadeIn}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img src={image} alt="Hotel Travel Planner" className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">Hotel Travel Planner</h3>
                <motion.a
                  href="https://github.com/AlieenBotrishabh/Hotel-Travel-Planner"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mb-4">A responsive Trip Planner website built using Next.js, Prisma ORM and Google Maps API.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-200/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">Next.js</span>
                <span className="bg-pink-200/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium">Google Maps API</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10 relative"
            variants={fadeIn}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img src={image2} alt="NextHire - A Job Portal" className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">NextHire - A Job Portal</h3>
                <motion.a
                  href="https://github.com/AlieenBotrishabh/NextHire-An-Online-Job-Portal"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mb-4">A Job Portal built using React.js, MongoDB, Express.js and Node.js.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                <span className="bg-green-200/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium">Express.js</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Project Card 3 */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10 relative"
            variants={fadeIn}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img src={image3} alt="TogethrTask" className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">TogethrTask - A Task Manager</h3>
                <motion.a
                  href="https://github.com/AlieenBotrishabh/Advanced-Collaborative-User-Task-Manager"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mb-4">An advanced and collaborative user task manager.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-200/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">Express.js</span>
                <span className="bg-pink-200/20 text-pink-200 px-3 py-1 rounded-full text-xs font-medium">MongoDB</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/10 relative"
            variants={fadeIn}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <img src={image4} alt="News App" className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">News App</h3>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-gray-400 text-sm mb-4">A simple news application that delivers real-time headlines, in-depth articles, and tailored news updates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-200/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium">HTML</span>
                <span className="bg-green-200/20 text-green-200 px-3 py-1 rounded-full text-xs font-medium">CSS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    <motion.section
      className="py-24 relative z-20 text-white overflow-hidden"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Background elements for visual flair */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 70 + 20,
              height: Math.random() * 70 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100],
              y: [0, -100],
              rotate: [0, 360],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Glass Card Container for the form */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent"
            variants={slideUp}
          >
            Get In Touch!
          </motion.h2>
          <motion.p
            className="text-gray-300 text-center mb-8 text-lg"
            variants={slideUp}
          >
            I'd love to hear from you! Fill out the form below or connect with me via social media.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div variants={slideUp}>
              <label htmlFor="name" className="block text-gray-200 text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Full Name"
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={slideUp}>
              <label htmlFor="email" className="block text-gray-200 text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="your.email@example.com"
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={slideUp}>
              <label htmlFor="message" className="block text-gray-200 text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Type your message here..."
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 resize-y"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-4 px-8 rounded-full font-bold text-lg bg-gradient-to-r from-pink-500/80 to-purple-500/80 text-white shadow-lg border border-pink-300/30 hover:from-pink-500 hover:to-purple-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
              variants={slideUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {submissionMessage && (
              <motion.div
                className="mt-6 text-center text-green-400 bg-green-900/30 p-4 rounded-xl border border-green-500/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submissionMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
    </div>
  );
}