import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';

export default function ContactScreen() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'UI/UX Design',
    budget: '$5,000+'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="px-6 space-y-12">
      <section className="pt-8 space-y-2">
        <h4 className="text-gold font-display text-sm uppercase tracking-[0.3em]">Direct Access</h4>
        <h1 className="text-4xl font-display font-bold">Start Your Build</h1>
        <p className="text-white/50 text-sm">Fill out the brief below. We usually respond within 4 business hours.</p>
      </section>

      <section className="pb-24">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="glass rounded-[40px] p-8 space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              
              <div className="space-y-4">
                <Input 
                  label="Name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(v) => setFormData({...formData, name: v})}
                />
                <Input 
                  label="Email" 
                  placeholder="john@studio.com" 
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({...formData, email: v})}
                />
                
                <div className="space-y-2">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold ml-2">Project Type</label>
                  <select 
                    className="w-full h-14 glass bg-white/5 rounded-2xl px-6 outline-none text-sm appearance-none border-white/10"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  >
                    <option className="bg-charcoal">UI/UX Design</option>
                    <option className="bg-charcoal">Web Development</option>
                    <option className="bg-charcoal">App Design</option>
                    <option className="bg-charcoal">Branding</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold ml-2">Estimated Budget</label>
                  <select 
                    className="w-full h-14 glass bg-white/5 rounded-2xl px-6 outline-none text-sm appearance-none border-white/10"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option className="bg-charcoal">$2,000 - $5,000</option>
                    <option className="bg-charcoal">$5,000 - $10,000</option>
                    <option className="bg-charcoal">$10,000 - $25,000</option>
                    <option className="bg-charcoal">$25,000+</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-16 rounded-3xl bg-gold text-black font-display font-bold text-sm tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform neumorphic-gold"
              >
                SEND TRANSMISSION <Send size={18} />
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-[40px] p-12 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} className="text-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold">Transmission Received</h3>
                <p className="text-white/50 text-sm">The digital architect has been notified. Stay tuned.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 grid grid-cols-2 gap-4">
          <ContactMethod 
            icon={<MessageSquare size={20} />} 
            label="WhatsApp" 
            sub="+1 (555) 000-000"
            color="bg-green-500/10 text-green-500 border-green-500/20"
          />
          <ContactMethod 
            icon={<Mail size={20} />} 
            label="Email" 
            sub="nathan@os.design"
            color="bg-blue-500/10 text-blue-500 border-blue-500/20"
          />
        </div>
      </section>
    </div>
  );
}

function Input({ label, placeholder, value, onChange, type = "text" }: { label: string, placeholder: string, value: string, onChange: (v: string) => void, type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold ml-2">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 glass bg-white/5 rounded-2xl px-6 outline-none text-sm placeholder:text-white/20 border-white/10 focus:border-gold/50 transition-colors"
      />
    </div>
  );
}

function ContactMethod({ icon, label, sub, color }: { icon: React.ReactNode, label: string, sub: string, color: string }) {
  return (
    <button className={`p-6 rounded-[32px] border text-left space-y-3 glass ${color} transition-all active:scale-95`}>
      <div className="opacity-80">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest">{label}</p>
        <p className="text-[10px] opacity-60 font-medium">{sub}</p>
      </div>
    </button>
  );
}
