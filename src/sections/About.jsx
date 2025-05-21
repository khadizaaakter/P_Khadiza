import React from 'react';
import GlowCard from '../components/GlowCard';

const About = () => {
  return (

    <div id="about" className="padding-x-lg xl:mt-34">
      <div className="bg-zinc-900 rounded-lg p-10 mt-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">

          {/* Left Side: Image */}
          <div className="flex justify-center md:justify-center">
            <img
              src="/images/project1.png"
              alt="About Me"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Me</h2>
            <p className="text-lg leading-relaxed text-white/80 text-center md:text-left">
              I'm a passionate and detail-oriented web developer specializing in Laravel, Vue.js, and SQL.
              Currently working at ACI Limited, I support and manage database systems for one of Bangladesh’s
              leading retail businesses. With hands-on experience in backend development, database optimization,
              and project documentation, I enjoy turning ideas into functional, user-friendly applications.
              I'm always eager to learn, collaborate, and build solutions that create real impact.
            </p>
          </div>

        </div>
      </div>
    </div>


  );
};

export default About;
