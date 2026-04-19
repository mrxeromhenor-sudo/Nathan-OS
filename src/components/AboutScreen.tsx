import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, Code, Figma, Palette, Zap } from 'lucide-react';

const SKILLS = [
  { name: 'UI/UX Design', level: 95, icon: <Figma size={18} /> },
  { name: 'Website Dev', level: 90, icon: <Code size={18} /> },
  { name: 'Branding', level: 85, icon: <Palette size={18} /> },
  { name: 'Motion Design', level: 80, icon: <Zap size={18} /> },
];

export default function AboutScreen() {
  return (
    <div className="px-6 space-y-12">
      <section className="pt-8 text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-tr from-gold to-red-500 rounded-full blur-xl opacity-40 animate-pulse" />
          <img 
            src="https://picsum.photos/seed/nathan/400/400" 
            alt="Nathan OS" 
            className="w-full h-full rounded-full object-cover relative border-2 border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="space-y-2">
          <div className="os-pill glass-gold text-gold mx-auto inline-block mb-2">Design Authority</div>
          <h1 className="text-4xl font-display font-light tracking-tighter uppercase">Nathan <span className="font-bold">OS</span></h1>
          <p className="neon-gold text-[10px] uppercase tracking-[0.4em] font-bold">System Architect</p>
        </div>
      </section>

      <section className="glass rounded-[32px] p-8 space-y-6">
        <h3 className="text-xl font-display font-bold">The Vision</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Nathan OS isn't just a design agency—it's a philosophy. We believe digital interfaces should be as tactile and responsive as premium physical products. Based in global digital hubs, we architect experiences for the next generation of tech-moguls.
        </p>
        <div className="flex gap-4">
          <SocialIcon icon={<Github size={20} />} />
          <SocialIcon icon={<Twitter size={20} />} />
          <SocialIcon icon={<Linkedin size={20} />} />
          <SocialIcon icon={<Instagram size={20} />} />
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-display font-bold pl-4 border-l-2 border-gold">Elite Skillset</h3>
        <div className="space-y-6">
          {SKILLS.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2 text-white/80">
                  {skill.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{skill.name}</span>
                </div>
                <span className="text-gold font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-gold to-gold/30"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-display font-bold pl-4 border-l-2 border-gold">Timeline</h3>
        <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
          <TimelineItem 
            date="2024 - Present" 
            title="Nathan OS Founding" 
            description="Established the agency as a conversion-first design studio."
          />
          <TimelineItem 
            date="2021 - 2024" 
            title="Lead Designer @ Tech Giants" 
            description="Architected UI systems for Silicon Valley unicorns."
          />
          <TimelineItem 
            date="2018 - 2021" 
            title="Freelance Authority" 
            description="Completed 500+ projects with 99% client satisfaction."
          />
        </div>
      </section>

      <div className="h-12" />
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white/60 hover:text-gold transition-colors active:scale-90 duration-300">
      {icon}
    </button>
  );
}

function TimelineItem({ date, title, description }: { date: string, title: string, description: string }) {
  return (
    <div className="relative pl-8 space-y-1">
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-gold z-10" />
      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{date}</span>
      <h4 className="text-lg font-display font-bold">{title}</h4>
      <p className="text-white/40 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
