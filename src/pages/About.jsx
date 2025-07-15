import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="h-[100vh] px-6 py-10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I’m a React Developer specializing in building interactive interfaces. I enjoy crafting clean,
        modern web apps and constantly learning new technologies to improve user experiences.
      </p>
      <div className="flex gap-3 flex-wrap">
        {["React", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Git"].map(skill => (
          <span className="bg-gray-200 px-2 py-1 rounded text-sm" key={skill}>{skill}</span>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
