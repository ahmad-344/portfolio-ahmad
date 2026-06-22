import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contactahmad.services@gmail.com', href: 'mailto:contactahmad.services@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+923190539976', href: 'https://wa.me/923190539976' },
  { icon: MapPin, label: 'Location', value: 'Pakistan (Available Worldwide)', href: undefined },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: undefined },
];

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

    const text = encodeURIComponent(
      `*New Project Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project Type:* ${projectType}\n*Budget Range:* ${budget}\n\n*About the Project:*\n${message}`
    );
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/923190539976?text=${text}`
      : `https://web.whatsapp.com/send?phone=923190539976&text=${text}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setLoading(false);
      toast({ title: '✅ Redirecting to WhatsApp!', description: "Your details are ready to send on WhatsApp." });
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
          Let's Build Something <span className="text-primary glow-text">Great</span> Together
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Have a project in mind? I'm available for freelance work and collaborations. Let's talk.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Tag = item.href ? 'a' : 'div';
              return (
                <Tag
                  key={item.label}
                  {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass-card-hover p-4 flex items-center gap-4 block"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsla(var(--neon-blue) / 0.1)' }}
                  >
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                </Tag>
              );
            })}

            <a
              href="https://wa.me/923190539976"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02]"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <input
              required
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
            />
            <select
              required
              name="projectType"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
              defaultValue=""
            >
              <option value="" disabled>Project Type</option>
              <option>Web App</option>
              <option>AI Tool</option>
              <option>Landing Page</option>
              <option>SaaS</option>
              <option>Other</option>
            </select>
            <select
              required
              name="budget"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition"
              defaultValue=""
            >
              <option value="" disabled>Budget Range</option>
              <option>Under $500</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $5,000</option>
              <option>$5,000+</option>
            </select>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary-glow w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
