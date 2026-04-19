import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Layout, 
  Globe, 
  Palette, 
  ExternalLink 
} from 'lucide-react';
import { PROJECTS } from '../constants';
import { Screen, Project } from '../types';

export default function HomeScreen({ onNavigate, onProjectClick }: { onNavigate: (s: Screen) => void, onProjectClick: (p: Project) => void }) {
  return (
    <div className="px-6 space-y-12">
      {/* Hero Section */}
      <section className="pt-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
          <h2 className="text-[10px] uppercase tracking-[0.3em] neon-gold font-bold mb-4">Digital Experience Studio</h2>
          <h1 className="text-5xl font-display font-light tracking-tighter leading-[1] relative">
            Designing <br />
            <span className="italic font-serif">Digital</span> Interfaces <br />
            <span className="font-bold">That Convert.</span>
          </h1>
        </motion.div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="flex-1 h-14 rounded-full btn-gold text-black font-display font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
          >
            Start a Project
          </button>
          <button 
            onClick={() => onNavigate('portfolio')}
            className="flex-1 h-14 rounded-full glass text-white font-display font-bold text-xs uppercase tracking-widest border-white/10 active:scale-95 transition-transform"
          >
            View Portfolio
          </button>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="grid grid-cols-3 gap-4">
        <HighlightCard icon={<Layout size={20} />} label="UI/UX" />
        <HighlightCard icon={<Globe size={20} />} label="Web Dev" />
        <HighlightCard icon={<Palette size={20} />} label="Branding" />
      </section>

      {/* Scrolling Showcase */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold">Featured Production</h2>
          <button onClick={() => onNavigate('portfolio')} className="text-gold text-xs font-bold flex items-center gap-1">
            See All <ArrowUpRight size={14} />
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 snap-x">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onProjectClick(project)}
              className="min-w-[280px] h-[380px] rounded-3xl overflow-hidden glass relative snap-center cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 block">{project.category}</span>
                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                <div className="flex gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-[10px] text-white/50">{stat.label}</p>
                      <p className="text-sm font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="glass rounded-3xl p-8 space-y-6 text-center">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em]">Verified On MetaPlatforms</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-30 grayscale invert">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Fiverr_logo.svg" alt="Fiverr" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Upwork_logo.svg" alt="Upwork" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Freelancer_logo.svg" alt="Freelancer" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Behance_logo.svg/1024px-Behance_logo.svg.png" alt="Behance" className="h-4" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Spacing for Nav */}
      <div className="h-12" />
    </div>
  );
}

function HighlightCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="glass rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
      <div className="text-gold">{icon}</div>
      <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">{label}</span>
    </div>
  );
}
