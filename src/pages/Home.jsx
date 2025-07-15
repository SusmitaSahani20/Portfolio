import React from "react";
import { Link } from "react-router-dom";
import Susmita from "../assets/Susmita.jpg";
import CV from "../assets/Susmita Sahani CV.pdf";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between py-20 px-6 bg-white max-w-7xl mx-auto overflow-hidden relative">
      {/* Scroll Indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full origin-left"
        ></div>
      </div>

      {/* Text Section (Left) */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Susmita 👋</h1>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          <Typewriter
            words={["Frontend Developer", "React Enthusiast", "UI/UX Designer"]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Experienced frontend developer with a passion for creating visually
          stunning and user-friendly websites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            Hire Me
          </button>
          <a
            href={CV}
            download
            className="bg-gray-800 text-white px-6 py-2 rounded shadow hover:bg-gray-900 transition text-center"
          >
            Download CV
          </a>
          <Link
            to="/projects"
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      {/* Image Section (Right) */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={Susmita}
          alt="Susmita"
          className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-blue-100 cursor-grab"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
