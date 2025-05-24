import React, { useRef } from 'react';
import TitleHeader from '../components/TitleHeader';

const About = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div id="about" className="padding-x-lg xl:mt-34">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="About Me" sub="💻 Career Objective" />
      </div>

      {/* Glow card wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative group rounded-xl p-[2px] mt-8 mx-auto max-w-7xl transition-transform duration-300"
      >
        {/* White glow effect on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(500px circle at var(--x, var(--y)), rgba(255, 255, 255, 0.6), transparent)',
          }}
        ></div>

        {/* Card content */}
        <div className="relative z-10 bg-zinc-900 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Image side */}
          <div className="flex justify-center">
            <img
              src="/images/project1.png"
              alt="About Me"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text content */}
          <div>
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
