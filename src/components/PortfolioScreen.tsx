import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export default function PortfolioScreen({ onProjectClick }: { onProjectClick: (p: Project) => void }) {
  return (
    <div className="px-6 space-y-12">
      <section className="pt-8 space-y-2">
        <h4 className="text-gold font-display text-sm uppercase tracking-[0.3em]">Project Archive</h4>
        <h1 className="text-4xl font-display font-bold">Showcase Authority</h1>
        <p className="text-white/50 text-sm">We build digital products that move markets and define industries.</p>
      </section>

      <section className="space-y-12 pb-24">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onProjectClick(project)}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden glass border-white/5 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Interaction Overlay */}
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <span className="bg-gold/90 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{project.category}</span>
                <h3 className="text-3xl font-display font-bold">{project.title}</h3>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-end">
              <div className="space-y-2 max-w-[70%]">
                <p className="text-white/60 text-sm italic">"{project.description}"</p>
              </div>
              <div className="text-right">
                <p className="text-gold font-display font-bold text-lg">{project.stats[0].value}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{project.stats[0].label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
