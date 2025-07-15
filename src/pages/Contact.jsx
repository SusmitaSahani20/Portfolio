import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="px-6 py-10 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
