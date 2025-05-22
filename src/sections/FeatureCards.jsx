import React, { useRef } from 'react';
import { abilities } from '../constants';

const FeatureCards = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="group relative rounded-xl p-[2px] transition-transform duration-300 hover:scale-105"
          >
            {/* Stronger white glow on hover */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  'radial-gradient(250px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.8), transparent)',
              }}
            ></div>

            {/* Inner card */}
            <div className="bg-zinc-900 relative z-10 rounded-[10px] p-8 flex flex-col gap-4 h-full transition duration-300">
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
              </div>
              <h3 className="text-white-50 text-2xl font-semibold mt-2">
                {title}
              </h3>
              <p className="text-white-50 text-lg">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
