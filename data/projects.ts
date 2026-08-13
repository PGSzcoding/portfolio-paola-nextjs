export interface Project {
  id: string;
  image: string;
  category: 'fullstack' | 'freelance';
  technologies: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    id: 'proofs-trials',
    image: '/images/projects/proofs-trials.png',
    category: 'fullstack',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS',
    ],
  },

  {
    id: 'layout-aleman',
    image: '/images/projects/layout-aleman.png',
    category: 'freelance',
    technologies: [
      'SvelteKit',
      'CMS',
      'Firebase',
      'JavaScript',
    ],
  },

  {
    id: 'hospitality-platform',
    image: '/images/projects/hospitality-platform.png',
    category: 'fullstack',
    technologies: [
      'Svelte',
      'TypeScript',
      'Node.js',
      'AWS',
    ],
  },
];