import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    title: "Nathan OS",
    subtitle: "Digital Design Authority",
    description: "Welcome to the future of digital product design. Explore the OS of luxury interfaces.",
    image: "https://picsum.photos/seed/nathanos1/600/800"
  },
  {
    title: "Convert Visitors",
    subtitle: "High-Performance UX",
    description: "We don't just design portfolios. We build conversion machines for premium brands.",
    image: "https://picsum.photos/seed/nathanos2/600/800"
  },
  {
    title: "Ready to Build?",
    subtitle: "Start Your Project",
    description: "Join the elite group of clients who define the digital landscape with Nathan OS.",
    image: "https://picsum.photos/seed/nathanos3/600/800"
  }
];

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="relative h-full w-full bg-black flex flex-col justify-end p-8">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.img
          key={step}
          src={STEPS[step].image}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <motion.div
          key={`content-${step}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-gold font-display text-sm uppercase tracking-[0.3em] mb-4">
            {STEPS[step].subtitle}
          </h4>
          <h1 className="text-5xl font-display font-bold leading-tight mb-4">
            {STEPS[step].title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            {STEPS[step].description}
          </p>
        </motion.div>

        {/* Action Area */}
        <div className="flex items-center justify-between pt-8">
          <div className="flex gap-2">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          
          <button 
            onClick={next}
            className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center neumorphic-gold group active:scale-95 transition-transform"
          >
            {step === STEPS.length - 1 ? <ArrowRight className="group-hover:translate-x-1 transition-transform" /> : <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>
      </div>
    </div>
  );
}
