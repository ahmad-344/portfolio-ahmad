import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Ahmad delivered our web app in record time with zero bugs. His attention to detail and communication is top-notch. Will hire again!",
    name: 'James K.',
    role: 'Startup Founder, USA',
  },
  {
    text: "Absolutely brilliant developer. He built our AI tool from scratch and it works flawlessly. Highly recommended.",
    name: 'Sarah M.',
    role: 'Product Manager, UK',
  },
  {
    text: "Ahmad transformed our old website into a stunning, fast, and modern platform. Customers love it!",
    name: 'Usman A.',
    role: 'Business Owner, Pakistan',
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4">
      <div ref={ref} className="section-reveal max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          What Clients <span className="text-primary glow-text">Say</span>
        </h2>
        <div className="gradient-line w-20 mx-auto mb-16" />

        <div className="relative">
          <div className="glass-card p-8 sm:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading font-semibold text-primary">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
