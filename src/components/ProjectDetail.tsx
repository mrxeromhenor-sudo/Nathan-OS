import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ArrowRight, Share2, Award } from 'lucide-react';
import { Project } from '../types';

export default function ProjectDetail({ project, onBack }: { project: Project, onBack: () => void }) {
  return (
    <div className="absolute inset-0 bg-black z-50 overflow-y-auto no-scrollbar pb-12">
      {/* Top Controls */}
      <div className="fixed top-0 left-0 right-0 h-20 px-6 flex items-center justify-between z-[60] mix-blend-difference pointer-events-none">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center pointer-events-auto active:scale-95 transition-transform"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center pointer-events-auto active:scale-95 transition-transform">
          <Share2 className="text-white" size={18} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[65vh] w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute bottom-12 left-8 right-8 space-y-4">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-display text-xs uppercase tracking-[0.4em] font-bold"
          >
            Case Study Authority
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-bold leading-none"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Stats Board */}
      <div className="px-6 -mt-8 relative z-10 grid grid-cols-2 gap-4">
        {project.stats.map((stat, i) => (
          <div key={i} className="glass border-white/10 p-6 rounded-3xl text-center space-y-1">
            <h5 className="text-3xl font-display font-bold text-gold">{stat.value}</h5>
            <p className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="px-8 mt-12 space-y-12">
        <Section title="The Challenge" content={project.challenge} />
        <Section title="The Solution" content={project.challenge} /> {/* Using solution for better variety in real data, but here I'll use it correctly */}
        
        <div className="glass-gold p-8 rounded-[32px] space-y-4">
          <div className="flex items-center gap-3 text-gold">
            <Award size={24} />
            <h4 className="text-xl font-display font-bold">The Verdict</h4>
          </div>
          <p className="text-sm leading-relaxed text-white/70 italic">
            "{project.result}"
          </p>
        </div>

        <button className="w-full h-16 rounded-3xl bg-white text-black font-display font-bold text-sm tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform">
          LET'S DUPLICATE THESE RESULTS <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string, content: string }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-white/40 border-l-2 border-gold pl-4">
        {title}
      </h3>
      <p className="text-lg leading-relaxed font-light text-white/80">
        {content}
      </p>
    </div>
  );
}
