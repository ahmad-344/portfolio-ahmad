import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Zap, Code, Server, Database, Brain } from 'lucide-react';

const categories = [
  {
    title: 'Frontend Development',
    icon: Code,
    mastery: 95,
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion', 'Redux Toolkit', 'Zustand', 'React Query', 'React Hook Form', 'Zod', 'Vite', 'Responsive Design', 'WCAG'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    mastery: 88,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT Auth', 'OAuth 2.0', 'Middleware Architecture', 'MVC Pattern', 'Server-Side Rendering'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    mastery: 85,
    skills: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Prisma ORM', 'Drizzle ORM', 'Redis', 'AWS (S3, EC2, Lambda)', 'Vercel', 'Netlify', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'AI & Tools',
    icon: Brain,
    mastery: 90,
    skills: ['OpenAI API', 'Anthropic Claude API', 'AI App Development', 'Lovable.dev', 'Cursor AI', 'Prompt Engineering', 'Git & GitHub', 'Figma to Code', 'Agile/Scrum', 'VS Code'],
  },
];

const ProgressRing = ({ mastery }: { mastery: number }) => {
  const { count, ref } = useCountUp(mastery);
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (count / 100) * c;

  return (
    <div ref={ref} className="relative w-20 h-20 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="4" className="progress-ring-track" />
        <circle
          cx="40" cy="40" r={r} fill="none" strokeWidth="4"
          stroke="url(#gradient)"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="progress-ring-fill"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190 100% 50%)" />
            <stop offset="100%" stopColor="hsl(263 84% 52%)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary font-heading">
        {count}%
      </span>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 flex items-center justify-center gap-3">
          Tech Arsenal <Zap className="text-primary" size={32} />
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          Every tool I use — mastered, not just learned.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="glass-card-hover p-6">
                <div className="flex items-center gap-4 mb-5">
                  <Icon className="text-primary" size={24} />
                  <h3 className="font-heading text-lg font-semibold flex-1">{cat.title}</h3>
                  <ProgressRing mastery={cat.mastery} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
