import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl sm:text-4xl font-bold text-primary glow-text">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
};

const codeSnippet = `<span class="code-keyword">const</span> <span class="code-property">ahmadRaza</span> = <span class="code-bracket">{</span>
  <span class="code-property">name</span>: <span class="code-string">"Ahmad Raza"</span>,
  <span class="code-property">role</span>: <span class="code-string">"Senior Full-Stack Engineer"</span>,
  <span class="code-property">skills</span>: <span class="code-bracket">[</span>
    <span class="code-string">"React"</span>, <span class="code-string">"Next.js"</span>,
    <span class="code-string">"Node.js"</span>, <span class="code-string">"TypeScript"</span>,
    <span class="code-string">"AI Integration"</span>
  <span class="code-bracket">]</span>,
  <span class="code-property">yearsOfExperience</span>: <span class="code-number">3</span>,
  <span class="code-property">passionLevel</span>: <span class="code-string">"∞"</span>,
  <span class="code-property">available</span>: <span class="code-keyword">true</span>,
  <span class="code-comment">// Ready to build your next big thing</span>
  <span class="code-property">hireable</span>: <span class="code-keyword">() => true</span>
<span class="code-bracket">}</span>;`;

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-primary glow-text">Me</span>
        </h2>
        <div className="gradient-line w-20 mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Code block */}
          <div className="glass-card p-5 rounded-xl overflow-x-auto">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <pre className="text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap">
              <code dangerouslySetInnerHTML={{ __html: codeSnippet }} />
            </pre>
          </div>

          {/* Bio */}
          <div>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I'm Ahmad Raza — a passionate and results-driven Full-Stack Software Engineer with deep expertise in building modern web applications, AI-powered tools, SaaS platforms, and scalable backend systems. I specialize in turning complex problems into elegant, user-friendly digital solutions. Whether it's a pixel-perfect frontend or a high-performance API — I deliver excellence at every layer of the stack.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
