export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tiers: {
    name: string;
    price: string;
    features: string[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  stats: { label: string; value: string }[];
}

export type Screen = 'onboarding' | 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'project-detail';
