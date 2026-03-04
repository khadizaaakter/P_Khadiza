import { Canvas } from '@react-three/fiber';
import HeroLights from './HeroLights';
import Particles from './Particals';

const HeroExperience = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <HeroLights />
        <Particles count={100} />
      </Canvas>

      {/* Your image in a responsive circle (on top of particles); on mobile circle sits lower */}
      <div className="hero-circle-wrap">
        <div className="hero-circle-ring">
          <div className="hero-circle-inner">
            <img
              src="/hero-avatar.jpg"
              alt="Khadiza Akter"
              className="hero-circle-img"
              width={320}
              height={320}
              loading="eager"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/IMG-20250628-WA0007.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroExperience
