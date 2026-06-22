import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Globe, Bot, ShoppingCart, Palette, Plug, Rocket } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Full-Stack Web Applications', desc: 'End-to-end web apps built with React, Next.js, Node.js & Supabase. Fast, scalable, and production-ready.' },
  { icon: Bot, title: 'AI-Powered Tools & Chatbots', desc: 'Custom AI applications using OpenAI & Claude APIs — from smart dashboards to intelligent automation tools.' },
  { icon: ShoppingCart, title: 'SaaS Platforms', desc: 'Complete Software-as-a-Service products with auth, billing, dashboards, and multi-user support.' },
  { icon: Palette, title: 'Landing Pages & Portfolio Sites', desc: 'High-converting, visually stunning landing pages that turn visitors into customers.' },
  { icon: Plug, title: 'REST API & Backend Development', desc: 'Robust, secure, and well-documented APIs that power your frontend or mobile app.' },
  { icon: Rocket, title: 'Performance Optimization', desc: 'Speed audits and code optimization to make your existing app blazing fast and SEO-friendly.' },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          What I <span className="text-primary glow-text">Build</span> For You
        </h2>
        <div className="gradient-line w-20 mx-auto mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-card-hover p-6 group">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{ background: 'hsla(var(--neon-blue) / 0.1)' }}
                >
                  <Icon className="text-primary transition-transform group-hover:scale-110" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
