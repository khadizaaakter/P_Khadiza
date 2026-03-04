/**
 * Lightweight hero right side: modern circle + your image + CSS particles.
 * No Three.js/WebGL — fast load on mobile.
 * Put your photo at: public/hero-avatar.jpg (or .png / .jfif)
 */
const PARTICLE_COUNT = 100;

const HeroAvatar = () => {
  return (
    <div className="hero-avatar-wrapper">
      {/* CSS-only particles (lightweight, no 3D) */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Modern circle with your image */}
      <div className="hero-avatar-ring">
        <div className="hero-avatar-inner">
          <img
            src="/hero-avatar.jpg"
            alt="Khadiza Akter"
            className="hero-avatar-img"
            width={320}
            height={320}
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/cv.jfif'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAvatar;
