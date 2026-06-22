import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ahmadProfile from '@/assets/ahmad-pf.png';

const words = [
  'Senior Full-Stack Engineer',
  'React & Next.js Specialist',
  'AI-Powered App Developer',
  'UI/UX Craftsman',
  'Open to Freelance Projects',
];

const techIcons = ['⚛️', '🟢', '🔷', '🐍', '⚡', '🔥'];

const HeroSection = () => {
  const typed = useTypewriter(words);
  const ref = useScrollReveal();

  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-8 sm:pb-0"
    >
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 40}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}

      {/* Orbiting tech icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {techIcons.map((icon, i) => (
          <span
            key={i}
            className="orbit-icon text-2xl opacity-20"
            style={{
              '--orbit-radius': `${180 + i * 40}px`,
              animationDuration: `${15 + i * 5}s`,
              animationDelay: `${i * -2}s`,
            } as React.CSSProperties}
          >
            {icon}
          </span>
        ))}
      </div>

      <div ref={ref} className="section-reveal relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="relative mx-auto mb-8 w-40 h-40 sm:w-44 sm:h-44">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background: 'conic-gradient(from 0deg, hsl(var(--neon-blue)), hsl(var(--neon-violet)), hsl(var(--neon-green)), hsl(var(--neon-blue)))',
              padding: '3px',
              filter: 'blur(6px)',
              opacity: 0.6,
            }}
          />
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, hsl(var(--neon-blue)), hsl(var(--neon-violet)), hsl(var(--neon-green)), hsl(var(--neon-blue)))',
              padding: '3px',
            }}
          >
            <div className="w-full h-full rounded-full" style={{ background: 'hsl(var(--background))' }} />
          </div>
          {/* Image */}
          <div className="absolute inset-[4px] rounded-full overflow-hidden"
            style={{
              boxShadow: '0 0 40px hsla(var(--neon-blue) / 0.3), 0 0 80px hsla(var(--neon-violet) / 0.15)',
            }}
          >
            <img src={ahmadProfile} alt="Ahmad Raza" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold glow-text text-primary mb-4">
          Ahmad Raza
        </h1>

        <div className="h-8 mb-6">
          <span className="font-heading text-lg sm:text-xl md:text-2xl text-secondary typewriter-cursor pr-1">
            {typed}
          </span>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build scalable, beautiful, and intelligent web applications that solve real-world problems. From idea to deployment — I do it all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-glow"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
