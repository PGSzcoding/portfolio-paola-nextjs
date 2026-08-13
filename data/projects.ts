export type ProjectId =
  | 'proofs-trials'
  | 'layout-aleman'
  | 'hospitality-platform'
  | 'bookshelf'
  | 'tekoestudio'
  | 'chat-app';

export interface Project {
  id: ProjectId;
  image: string;
  category: 'fullstack' | 'freelance';
  technologies: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    id: 'proofs-trials',
    image: '/images/default-proyect.png',
    category: 'fullstack',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS',
      'Tailwind CSS',
    ],
  },

  {
    id: 'layout-aleman',
    image: '/images/default-proyect.png',
    category: 'freelance',
    technologies: [
      'SvelteKit',
      'JavaScript',
      'Firebase',
      'CMS',
    ],
  },

  {
    id: 'hospitality-platform',
    image: '/images/default-proyect.png',
    category: 'fullstack',
    technologies: [
      'Svelte',
      'TypeScript',
      'Node.js',
      'AWS',
    ],
  },

  {
    id: 'bookshelf',
    image: '/images/default-proyect.png',
    category: 'fullstack',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
    ],
  },

  {
    id: 'tekoestudio',
    image: '/images/default-proyect.png',
    category: 'freelance',
    technologies: [
      'Svelte',
      'Sanity',
      'Vite',
    ],
  },

  {
    id: 'chat-app',
    image: '/images/default-proyect.png',
    category: 'fullstack',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
    ],
  },
];