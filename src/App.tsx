/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layers, 
  Briefcase, 
  User, 
  MessageSquare, 
  ChevronRight,
  Menu,
  Bell
} from 'lucide-react';
import { Screen, Project } from './types';
import Onboarding from './components/Onboarding';
import HomeScreen from './components/HomeScreen';
import ServicesScreen from './components/ServicesScreen';
import PortfolioScreen from './components/PortfolioScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);

  // Use state to track if onboarding is done (persist in localstorage for real apps)
  useEffect(() => {
    const done = localStorage.getItem('onboarded');
    if (done) {
      setIsOnboarded(true);
      setCurrentScreen('home');
    }
  }, []);

  const handleOnboardingComplete = () => {
    setIsOnboarded(true);
    setCurrentScreen('home');
    localStorage.setItem('onboarded', 'true');
  };

  const navigateToProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreen('project-detail');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} onProjectClick={navigateToProject} />;
      case 'services':
        return <ServicesScreen />;
      case 'portfolio':
        return <PortfolioScreen onProjectClick={navigateToProject} />;
      case 'about':
        return <AboutScreen />;
      case 'contact':
        return <ContactScreen />;
      case 'project-detail':
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setCurrentScreen('portfolio')} 
          />
        ) : null;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} onProjectClick={navigateToProject} />;
    }
  };

  return (
    <div className="bg-glow relative h-screen w-full bg-[#050505] text-[#E5E5E5] overflow-hidden max-w-[450px] mx-auto border-x border-white/5 shadow-2xl shadow-gold/10 flex">
      {/* Background Glows */}
      <div className="absolute inset-0 accent-glow-red pointer-events-none"></div>
      <div className="absolute inset-0 accent-glow-gold pointer-events-none"></div>

      {/* Modern Sidebar Rail Mock (Decorative) */}
      <div className="w-1.5 sidebar-rail h-full bg-white/[0.02] relative z-10 hidden sm:block" />

      {/* OS Status Bar Mock */}
      {currentScreen !== 'onboarding' && (
        <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="text-[10px] font-bold font-display tracking-widest uppercase opacity-80">9:41</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="os-pill bg-white/5 text-[8px] scale-90">Operational</div>
            <span className="text-[10px] opacity-40 font-mono tracking-tighter">OS / V.04</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 h-full w-full overflow-y-auto no-scrollbar pb-24 pt-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Bottom Navigation */}
      {currentScreen !== 'onboarding' && (
        <nav className="absolute bottom-6 left-6 right-6 h-18 glass rounded-3xl flex items-center justify-around px-4 z-50">
          <NavButton 
            icon={<Home size={22} />} 
            active={currentScreen === 'home'} 
            onClick={() => setCurrentScreen('home')} 
          />
          <NavButton 
            icon={<Layers size={22} />} 
            active={currentScreen === 'services'} 
            onClick={() => setCurrentScreen('services')} 
          />
          <div className="relative -top-6">
            <button 
              onClick={() => setCurrentScreen('portfolio')}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                currentScreen === 'portfolio' ? 'bg-gold text-black neumorphic-gold scale-110' : 'bg-charcoal text-white border border-white/10'
              }`}
            >
              <Briefcase size={24} />
            </button>
          </div>
          <NavButton 
            icon={<User size={22} />} 
            active={currentScreen === 'about'} 
            onClick={() => setCurrentScreen('about')} 
          />
          <NavButton 
            icon={<MessageSquare size={22} />} 
            active={currentScreen === 'contact'} 
            onClick={() => setCurrentScreen('contact')} 
          />
        </nav>
      )}

      {/* Flashy Overlays (Optional) */}
      <div className="fixed top-0 left-0 w-full h-[300px] bg-gradient-to-b from-gold/5 to-transparent pointer-events-none z-0" />
    </div>
  );
}

function NavButton({ icon, active, onClick }: { icon: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative p-3 transition-all duration-300 ${active ? 'text-gold' : 'text-white/40'}`}
    >
      {icon}
      {active && (
        <motion.div 
          layoutId="nav-glow"
          className="absolute -inset-1 bg-gold/10 blur-xl rounded-full"
        />
      )}
    </button>
  );
}
