import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Bespoke interface design focusing on conversion and aesthetics.',
    icon: 'Layout',
    tiers: [
      { name: 'Basic', price: '$499', features: ['3 Screens', 'Design System', '1 Revision'] },
      { name: 'Standard', price: '$999', features: ['8 Screens', 'Full Interactive Prototype', '3 Revisions'] },
      { name: 'Premium', price: '$2,499', features: ['Unlimited Screens', 'User Testing', 'Unlimited Revisions'] }
    ]
  },
  {
    id: 'web',
    title: 'Website Development',
    description: 'High-performance websites built with modern frameworks.',
    icon: 'Globe',
    tiers: [
      { name: 'Basic', price: '$1,200', features: ['Landing Page', 'SEO Optimization', 'Speed Focus'] },
      { name: 'Standard', price: '$3,500', features: ['Multi-page Site', 'CMS Integration', 'Custom Animations'] },
      { name: 'Premium', price: '$8,000', features: ['E-commerce / App', 'Full Backend', 'Maintenance'] }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Graphics',
    description: 'Creating visual identities that define digital authority.',
    icon: 'Palette',
    tiers: [
      { name: 'Essential', price: '$800', features: ['Logo Design', 'Typography', 'Color Palette'] },
      { name: 'Luxury', price: '$2,500', features: ['Brand Guidelines', 'Social Media Kit', 'Brand Story'] }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fintech Pro',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/fintech/800/1200',
    description: 'A revolutionary banking interface for crypto-native users.',
    challenge: 'Simplifying complex transaction data for a non-technical audience.',
    solution: 'Implemented a minimalist layout with real-time gradient visualizations of portfolio health.',
    result: 'Increased user retention by 45% and reduced support tickets by 30%.',
    stats: [{ label: 'Retention', value: '+45%' }, { label: 'Active Users', value: '1.2M' }]
  },
  {
    id: '2',
    title: 'Luxe Real Estate',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/luxury/800/1200',
    description: 'Interactive property viewing platform for high-net-worth individuals.',
    challenge: 'Bringing the physical experience of luxury properties to a digital screen.',
    solution: 'Used heavy parallax, video backgrounds, and glassmorphic navigation to create an immersive feeling.',
    result: 'Conversion rate on property inquiries rose by 60%.',
    stats: [{ label: 'Inquiries', value: '+60%' }, { label: 'Time on Page', value: '8m+' }]
  },
  {
    id: '3',
    title: 'Eon OS',
    category: 'App Design',
    image: 'https://picsum.photos/seed/os/800/1200',
    description: 'A custom Android launcher skin for power users.',
    challenge: 'Balancing extreme customization with high performance.',
    solution: 'Designed a modular component system that allows users to rebuild their home screen dynamically.',
    result: 'Top 10 most downloaded personalization app on Google Play.',
    stats: [{ label: 'Downloads', value: '5M+' }, { label: 'Rating', value: '4.8/5' }]
  }
];
