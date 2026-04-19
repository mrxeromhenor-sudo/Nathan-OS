import React from 'react';
import { motion } from 'motion/react';
import { Layout, Globe, Palette, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Layout,
  Globe,
  Palette
};

export default function ServicesScreen() {
  return (
    <div className="px-6 space-y-12">
      <section className="pt-8 space-y-2">
        <h4 className="neon-gold font-display text-[10px] uppercase tracking-[0.4em] font-bold">Advanced Logic</h4>
        <h1 className="text-4xl font-display font-light tracking-tighter uppercase">Premium <span className="font-bold">Services</span></h1>
        <p className="text-[#E5E5E5]/50 text-xs">Every service is engineered for high conversion rates and luxury digital standards.</p>
      </section>

      <section className="space-y-8 pb-24">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon];
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-[32px] p-8 space-y-6 relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-gold rounded-2xl flex items-center justify-center text-gold">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                  <p className="text-xs text-white/40 font-medium">Starting from {service.tiers[0].price}</p>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Tiers */}
              <div className="space-y-4 pt-4">
                {service.tiers.map((tier, i) => (
                  <div key={i} className="glass bg-white/5 p-4 rounded-2xl flex items-center justify-between group/tier hover:bg-white/10 transition-colors">
                    <div>
                      <p className="text-gold text-[10px] font-bold uppercase tracking-widest">{tier.name}</p>
                      <p className="text-lg font-display font-bold">{tier.price}</p>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-bold btn-gold px-5 py-2.5 rounded-full uppercase tracking-widest group-hover/tier:scale-105 transition-transform">
                      Configure <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Included Performance</p>
                <div className="grid grid-cols-2 gap-y-2">
                  {service.tiers[0].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-white/70">
                      <Check size={12} className="text-gold" /> {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
