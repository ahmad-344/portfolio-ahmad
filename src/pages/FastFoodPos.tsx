import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  Monitor,
  ChefHat,
  ClipboardList,
  UtensilsCrossed,
  CreditCard,
  LayoutDashboard,
  Users,
  Table2,
  Bell,
  DatabaseBackup,
  Landmark,
  CheckCircle2,
  X,
} from 'lucide-react';

import login from '@/assets/pos/pos-login.png';
import dashboard from '@/assets/pos/pos-dashboard.png';
import terminal from '@/assets/pos/pos-terminal.png';
import menu from '@/assets/pos/pos-menu.webp';
import placeOrder from '@/assets/pos/pos-place-order.png';
import menuManager from '@/assets/pos/pos-menu-manager.png';
import orders from '@/assets/pos/pos-orders.png';
import orderHistory from '@/assets/pos/pos-order-history.png';
import settingsTables from '@/assets/pos/pos-settings-tables.png';
import settingsPrinter from '@/assets/pos/pos-settings-printer.png';

const features = [
  { icon: Monitor, title: 'POS Terminal', desc: 'Table-wise order taking with live cart and payment.' },
  { icon: ChefHat, title: 'Kitchen Display', desc: 'Real-time order queue — Incoming, Preparing, Ready.' },
  { icon: ClipboardList, title: 'Order Management', desc: 'Full order history with status and payment tracking.' },
  { icon: UtensilsCrossed, title: 'Menu Manager', desc: 'Add and edit products with image, price, and category.' },
  { icon: CreditCard, title: 'Payment System', desc: 'Cash, Card, Mobile Wallets, and Bank Transfer.' },
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'Revenue charts, top items, and order statistics.' },
  { icon: Users, title: 'Staff Management', desc: 'Add staff with assigned roles and permissions.' },
  { icon: Table2, title: 'Table Manager', desc: 'Configure tables with custom seating capacity.' },
  { icon: Bell, title: 'Notifications', desc: 'Real-time alerts for orders, payments, and kitchen.' },
  { icon: DatabaseBackup, title: 'Backup & Restore', desc: 'Export full data as JSON, restore on any machine.' },
  { icon: Landmark, title: 'Bank Support', desc: '30+ Pakistani banks & wallets — HBL, Meezan, Easypaisa, JazzCash.' },
];

const gallery = [
  { src: dashboard, title: 'Real-time Dashboard', desc: 'Revenue charts, top items & order statistics.' },
  { src: terminal, title: 'POS Terminal', desc: 'Table-wise order taking with live cart.' },
  { src: menu, title: 'Menu & Cart', desc: 'Browse categories and add items instantly.' },
  { src: placeOrder, title: 'Place Order + Kitchen Slip', desc: 'Thermal & A4 printer support built in.' },
  { src: menuManager, title: 'Menu Manager', desc: 'Manage products, prices, images & categories.' },
  { src: orders, title: 'Order Management', desc: 'Track status & payments with smart filters.' },
  { src: orderHistory, title: 'Order History', desc: 'View and export orders by date range.' },
  { src: settingsTables, title: 'Table Management', desc: 'Configure tables, seating & bill QR codes.' },
  { src: settingsPrinter, title: 'Printer Configuration', desc: 'Network thermal & Windows printer setup.' },
  { src: login, title: 'Secure Login', desc: 'Local, private and restaurant-branded access.' },
];

const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Local Database', 'Thermal Printing', 'JSON Backup'];

const banks = [
  'HBL', 'Meezan Bank', 'UBL', 'MCB', 'Allied Bank', 'Bank Alfalah',
  'Easypaisa', 'JazzCash', 'SadaPay', 'NayaPay', 'Faysal Bank', 'Askari Bank',
];

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const FastFoodPos = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Fast Food POS System — Ahmad Raza';
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Top bar */}
      <nav className="sticky top-0 z-40 navbar-blur border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <a
            href="https://github.com/ahmad-344/fast-food-pos-system"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow text-xs px-4 py-2 inline-flex items-center gap-1.5"
          >
            <Github size={14} /> View Code
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-10 sm:pt-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 skill-pill text-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--neon-green))] pulse-glow-green" />
            Full-Stack Project · Restaurant POS
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold leading-tight mb-5">
            Fast Food <span className="text-primary glow-text">POS</span> System
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            A complete Point of Sale system for restaurants — order management, kitchen
            display, payments, inventory & a real-time dashboard. Runs locally on your PC
            with your own private database.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/ahmad-344/fast-food-pos-system"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-flex items-center gap-2"
            >
              <Github size={16} /> Explore on GitHub
            </a>
            <Link to="/#contact" className="btn-outline-glow inline-flex items-center gap-2">
              Get something similar
            </Link>
          </div>
        </Reveal>

        {/* Hero preview */}
        <Reveal delay={320}>
          <div className="mt-14 glass-card overflow-hidden animate-floating">
            <img
              src={dashboard}
              alt="Fast Food POS dashboard"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Reveal>
          <div className="glass-card p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              This system covers the full restaurant workflow — from taking orders at the
              table, sending them to the kitchen, tracking preparation status, and
              collecting payment — all in one place.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            Powerful <span className="text-primary glow-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Everything a busy restaurant needs, in a single offline-first app.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <div className="glass-card-hover group p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-2">
            Inside the <span className="text-primary glow-text">App</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A look at the real screens — click any shot to enlarge.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 100}>
              <button
                onClick={() => setLightbox(g.src)}
                className="glass-card-hover group block w-full text-left overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base mb-1">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Reveal>
          <div className="glass-card p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold mb-5">Tech Stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((t) => (
                <span key={t} className="skill-pill">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bank support */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Reveal>
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="text-primary" size={22} />
              <h2 className="font-heading text-2xl font-bold">30+ Banks & Wallets</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Built-in support for Pakistani banks and mobile wallets for seamless payments.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {banks.map((b, i) => (
                <Reveal key={b} delay={(i % 4) * 60}>
                  <div className="flex items-center gap-2 glass-card px-4 py-3">
                    <CheckCircle2 size={16} className="text-[hsl(var(--neon-green))] shrink-0" />
                    <span className="text-sm">{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-4">…and many more.</p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="relative">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
                Want a system like this for your business?
              </h2>
              <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
                I build fast, reliable and beautiful full-stack apps tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/#contact" className="btn-primary-glow">Let's Talk</Link>
                <a
                  href="https://github.com/ahmad-344/fast-food-pos-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glow inline-flex items-center gap-2"
                >
                  <Github size={16} /> View Code
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 animate-[fade_0.2s_ease-out]"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-xl border border-border shadow-2xl"
          />
        </div>
      )}
    </main>
  );
};

export default FastFoodPos;
