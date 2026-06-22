import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import drSarahKhan from '@/assets/dr-sarah-khan.png';
import fastFoodPos from '@/assets/pos/pos-dashboard.png';
import resumeForge from '@/assets/resumeforge.png';
import morphix from '@/assets/morphix.png';
import bellaVista from '@/assets/bella-vista.png';
import all3PattiGames from '@/assets/all3pattigames.png';

const projects = [
  {
    name: 'Dr Sarah Khan Cardiology',
    desc: 'Full-stack interventional cardiologist portfolio with online appointment booking, admin panel, and Supabase database.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    categories: ['web', 'landing'],
    gradient: 'from-sky-600 to-blue-500',
    image: drSarahKhan,
    live: 'https://dr-sarah-khan-cardiology.vercel.app/',
    code: 'https://github.com/ahmad-344/dr-sarah-khan-cardiology',
  },
  {
    name: 'Fast Food POS System',
    desc: 'A complete Point of Sale system for restaurants — order management, kitchen display, payments, inventory & real-time dashboard. Runs locally with your own private database.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Local DB'],
    categories: ['saas', 'web'],
    gradient: 'from-amber-600 to-orange-500',
    image: fastFoodPos,
    detail: '/projects/fast-food-pos',
    code: 'https://github.com/ahmad-344/fast-food-pos-system',
  },
  {
    name: 'ResumeForge – AI-Powered Resume Builder',
    desc: 'AI-powered resume builder to create professional, ATS-optimized resumes in minutes — 115+ templates, AI content writer, and perfect PDF export. Completely free, no account needed.',
    stack: ['React', 'TypeScript', 'AI', 'Tailwind'],
    categories: ['web', 'landing'],
    gradient: 'from-blue-600 to-indigo-500',
    image: resumeForge,
    live: 'https://resume-forge-ai-powered-resume-buil.vercel.app/',
    code: 'https://github.com/ahmad-344/ResumeForge-AI-Powered-Resume-Builder',
  },
  {
    name: 'Morphix — Browser-Based Image Format Converter',
    desc: 'Convert images between WebP, JPEG, PNG, BMP, and GIF directly in your browser using HTML5 Canvas. No backend, no installation, no accounts. Drag, drop, convert, and download as ZIP.',
    stack: ['React', 'TypeScript', 'Canvas API', 'Tailwind'],
    categories: ['web'],
    gradient: 'from-cyan-600 to-sky-500',
    image: morphix,
    live: 'https://image-converter-tau-taupe.vercel.app/',
    code: 'https://github.com/ahmad-344/image-converter',
  },
  {
    name: 'Bella Vista',
    desc: 'A full-stack Italian fine dining restaurant website with online reservation system, dynamic menu management, image gallery, customer testimonials, and a complete admin panel with real-time settings propagation.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    categories: ['landing', 'web'],
    gradient: 'from-amber-700 to-yellow-600',
    image: bellaVista,
    live: 'https://bella-vista-alpha.vercel.app/',
    code: 'https://github.com/ahmad-344/bella-vista',
  },
  {
    name: 'All3PattiGames',
    desc: 'A dedicated Android gaming portal serving as a download hub for Teen Patti (3 Patti) game APK files. Users can browse and download the latest versions of this popular card game directly to their Android devices.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    categories: ['web', 'landing'],
    gradient: 'from-emerald-600 to-teal-500',
    image: all3PattiGames,
    live: 'https://www.all3pattigames.com/',
    code: 'https://github.com/ahmad-344/all3pattigames',
  },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Apps' },
  { key: 'landing', label: 'Landing Pages' },
  { key: 'saas', label: 'SaaS' },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
          Featured <span className="text-primary glow-text">Work</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          A selection of projects I've built with passion and precision.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.key
                  ? 'btn-primary-glow'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.name} className="glass-card-hover group overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-heading text-xl font-bold text-foreground opacity-70">{p.name}</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="skill-pill text-[11px]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.detail ? (
                    <Link
                      to={p.detail}
                      className="btn-outline-glow text-xs px-4 py-2 flex items-center gap-1.5"
                    >
                      <ArrowRight size={14} /> View Details
                    </Link>
                  ) : (
                    <a
                      href={p.live ?? '#'}
                      target={p.live ? '_blank' : undefined}
                      rel={p.live ? 'noopener noreferrer' : undefined}
                      className="btn-outline-glow text-xs px-4 py-2 flex items-center gap-1.5"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.code ?? '#'}
                    target={p.code ? '_blank' : undefined}
                    rel={p.code ? 'noopener noreferrer' : undefined}
                    className="btn-outline-glow text-xs px-4 py-2 flex items-center gap-1.5"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
