import React from 'react';
import { motion } from 'framer-motion';
import TitleHeader from '../components/TitleHeader';

const About = () => {
  return (
    <div id="about" className="px-5 md:px-18 pt-10 xl:pt-10 max-w-8xl mx-auto">
      {/* Responsive TitleHeader with bottom margin */}
      <div className="mb-10 mt-10 md:mt-16">
        <TitleHeader title="About Me" sub="🚀 Career Objective" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 md:p-10 shadow-lg relative overflow-hidden"
      >
        {/* Decorative Glow Effects */}
        <div className="absolute -top-10 -left-10 w-64 h-64 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Image Section */}
        <motion.img
          src="/images/project1.png"
          alt="Profile"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl w-64 h-64 object-cover shadow-md mx-auto md:mx-0"
        />

        {/* Text Section */}
        <div className="text-white space-y-3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">I'm a Web Developer Based in Bangladesh</h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            At <span className="text-purple-300 font-semibold">ACI Limited</span>, I specialize in backend development with 
            <span className="text-teal-400 font-medium"> Laravel</span>, <span className="text-teal-400 font-medium">Vue.js</span>, and SQL. I manage and support retail-focused systems for one of the country's top enterprises.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            I enjoy transforming business logic into scalable code, building smooth user experiences, and learning emerging technologies. I'm driven by innovation and committed to delivering quality with precision.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
