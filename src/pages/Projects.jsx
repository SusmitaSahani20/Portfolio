import React from 'react';
import spotifyImg from '../assets/spotifyImg.png';
import bookstoreImg from '../assets/bookstoreImg.png';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Spotify Web Clone',
      description: 'A music streaming platform clone using modern React UI.',
      tags: ['React', 'Tailwind CSS'],
      imgSrc: spotifyImg,
      github: 'https://github.com/SusmitaSahani20/Spotify_Clone'
    },
    {
      title: 'Book Store Management System',
      description: 'Full-stack book inventory app ',
      tags: ['React', 'Node.js', 'MongoDB'],
      imgSrc: bookstoreImg,
      github: '#'
    }
  ];

  return (
    <motion.section
      className="px-6 py-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
