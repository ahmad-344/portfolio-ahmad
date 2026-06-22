import { Github, Linkedin, MessageCircle } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/ahmad-344', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmadghouri', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/923190539976', label: 'WhatsApp' },
];

const Footer = () => (
  <footer className="relative pt-16 pb-8 px-4">
    <div className="gradient-line mb-12" />
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="font-heading text-xl font-bold mb-1">Ahmad Raza</h3>
      <p className="text-muted-foreground text-sm mb-6">Senior Full-Stack Engineer</p>

      <div className="flex justify-center gap-4 mb-8">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:shadow-[0_0_15px_hsla(var(--neon-blue)/0.2)]"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      <p className="text-muted-foreground/50 text-xs">
        © 2026 Ahmad Raza. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
