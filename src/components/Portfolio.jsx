import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import image from '../assets/A.png';
import image2 from '../assets/A2.png';
import image3 from '../assets/A3.png';
import image4 from '../assets/A4.png';
import html from '../assets/icons8-html-5.svg';
import react from '../assets/icons8-react.svg';
import nodejs from '../assets/icons8-nodejs.svg';
import express from '../assets/icons8-express-js.svg';
import mongodb from '../assets/icons8-mongodb.svg';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://backend-75apj5q3f-alieenbotrishabhs-projects.vercel.app//form", formData);
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

  const skills = [
    { name: "HTML", icon: html, description: "Building structured web pages with semantic HTML." },
    { name: "React", icon: react, description: "Creating dynamic UIs with component-based architecture." },
    { name: "Node.js", icon: nodejs, description: "Developing scalable backend applications with JavaScript." },
    { name: "Express.js", icon: express, description: "Building fast and lightweight server-side applications." },
    { name: "MongoDB", icon: mongodb, description: "Managing NoSQL databases for scalable data storage." },
  ];
  
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

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header with animation */}
      <motion.header 
        className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-800"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <motion.a 
          href="/" 
          className="text-2xl text-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          {"<>"}
        </motion.a>
        <nav>
          <motion.ul 
            className="flex space-x-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={navItemVariants}>
              <a href="/" className="text-white hover:text-pink-400">Home</a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#skills" className="text-white hover:text-pink-400">Skills</a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#projects" className="text-white hover:text-pink-400">Projects</a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#contact" className="text-white hover:text-pink-400">Contact Me</a>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>

      {/* Hero Section with animations */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          className="flex flex-col max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-pink-400 text-2xl mb-4"
            variants={slideUp}
          >
            Hey there!, I'm-
          </motion.p>
          <motion.h1 
            className="text-7xl font-bold mb-6"
            variants={slideUp}
          >
            Rishabh Kumar
          </motion.h1>
          <motion.div 
            className="mb-8"
            variants={slideUp}
          >
            <span className="text-2xl font-bold">A full stack developer</span>
            <span className="text-gray-400 text-xl"> A self-taught developer with an interest in Computer Science.</span>
          </motion.div>
          <motion.div 
            className="space-y-2"
            variants={slideUp}
          >
            <p className="flex items-center gap-2">
              <motion.span 
                className="text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                🚀
              </motion.span>
              <span className="text-gray-400">Currently specializing in Frontend (React) and Backend (NodeJs, ExpressJs, MongoDB) technologies</span>
            </p>
            <p className="flex items-center gap-2">
              <motion.span 
                className="text-yellow-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                🎓
              </motion.span>
              <span className="text-gray-400">A CS Student in India</span>
            </p>
          </motion.div>
          <motion.div 
            className="flex gap-4 mt-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a 
              href="https://github.com/AlieenBotrishabh" 
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md"
              variants={fadeIn}
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/rishabh-kumar-932692291/" 
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md"
              variants={fadeIn}
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
            <motion.a 
              href="mailto:rishabhk1324@gmail.com" 
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md"
              variants={fadeIn}
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </motion.a>
            <motion.a 
              href="../assets/Rishabh Kumar (2).pdf" 
              download 
              className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md"
              variants={fadeIn}
              whileHover={{ scale: 1.05, backgroundColor: "#ec4899" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0 4l-3-3m3 3l3-3m-3 3V4m-6 16h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section 
        className="container mx-auto px-4 py-16" 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div 
            className="md:w-2/3"
            variants={slideUp}
          >
            <motion.h2 
              className="flex items-center gap-2 text-3xl font-bold mb-8"
              variants={slideUp}
            >
              <motion.span 
                className="text-yellow-500"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              >
                ⚡
              </motion.span>
              About Me
            </motion.h2>
            <motion.div 
              className="space-y-4 text-gray-400"
              variants={staggerContainer}
            >
              <motion.p variants={slideUp}>Hey! I'm Rishabh kumar. I am Passionate about web development and making Ai Powered applications.</motion.p>
              <motion.p variants={slideUp}>I like to create applications by using <span className="text-pink-400">frontend and backend</span>back 2024, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies such as <span className="text-pink-400">React, NodeJs, ExpressJs</span> and <span className="text-pink-400">Socket.io</span></motion.p>
              <motion.p variants={slideUp}>My hobbies is to play music and video games</motion.p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/3"
            variants={fadeIn}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-2 right-2 w-32 h-32 bg-gray-800 rounded-xl opacity-20"></div>
              <img src="" alt="Profile" className="rounded-xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-12 bg-gray-900 text-white" 
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            variants={slideUp}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <motion.img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="bg-black text-white py-16" 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-2"
            variants={slideUp}
          >
            All Creative Works.
          </motion.h2>
          <motion.p 
            className="text-gray-400 mb-4"
            variants={slideUp}
          >
            Here's some of my projects that I have worked on.
          </motion.p>
          <motion.a 
            href="https://github.com/AlieenBotrishabh" 
            className="text-pink-400 mb-8 inline-block"
            variants={slideUp}
            whileHover={{ x: 10, color: "#ec4899" }}
          >
            Explore more →
          </motion.a>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-8"
            variants={staggerContainer}
          >
            {/* Project Card 1 */}
            <motion.div 
              className="bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div>
                <img src={image} alt="Project Image" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">Chatgpt Clone</h3>
                  <motion.a 
                    href="https://github.com/AlieenBotrishabh/Chatgpt" 
                    className="text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </motion.a>
                </div>
                <div className="flex gap-2 my-2">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">NodeJs</span>
                  <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs">ExpressJs</span>
                </div>
                <p className="text-gray-400 text-sm">Brief description of the project.</p>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              className="bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div>
                <img src={image2} alt="Project Image" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">Companies Task Manager</h3>
                  <motion.a 
                    href="https://github.com/AlieenBotrishabh/Companies-Task-Management" 
                    className="text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </motion.a>
                </div>
                <div className="flex gap-2 my-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">NodeJs</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">ExpressJs</span>
                </div>
                <p className="text-gray-400 text-sm">Brief description of the project.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-8"
            variants={staggerContainer}
          >
            {/* Project Card 3 */}
            <motion.div 
              className="bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div>
                <img src={image3} alt="Project Image" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">Expense Tracker Website</h3>
                  <motion.a 
                    href="https://github.com/AlieenBotrishabh/Expense-Tracker-Prototype" 
                    className="text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </motion.a>
                </div>
                <div className="flex gap-2 my-2">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded text-xs">Tailwind CSS</span>
                </div>
                <p className="text-gray-400 text-sm">Brief description of the project.</p>
              </div>
            </motion.div>

            {/* Project Card 4 */}
            <motion.div 
              className="bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div>
                <img src={image4} alt="Project Image" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl">News App</h3>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </motion.a>
                </div>
                <div className="flex gap-2 my-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">HTML</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">CSS</span>
                </div>
                <p className="text-gray-400 text-sm">Brief description of the project.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="container mx-auto px-4 py-16" 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="text-3xl font-bold text-pink-400 text-center"
          variants={slideUp}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-4"
          variants={slideUp}
        >
          I'd love to hear from you!
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto space-y-4"
          variants={staggerContainer}
        >
          <motion.div variants={slideUp}>
            <label className="block text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </motion.div>
          <motion.div variants={slideUp}>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
              className="w-full p-2 mt-1 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 rounded"
            variants={slideUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {message && (
            <motion.div 
              className="mt-4 text-center text-green-400 bg-gray-800 p-2 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {message}
            </motion.div>
          )}
        </motion.form>
      </motion.section>
    </div>
  );
}