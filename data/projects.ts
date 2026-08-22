

export type ProjectCategory = 'fullstack' | 'freelance' | 'Full-Stack Project';

export interface Project {
  id: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  title: string;
  liveUrl?: string;
  githubUrl?: string;

  details: {
    screenshots: {
      image: string;
      title: string;
    }[];
  };
}

export const projects = [
  {
    id: 'proofs-trials',
    title: 'Proofs & Trials P&T S.A.S.',
    category: 'Full-Stack Project',
    image: 'portada.png',

    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'AWS',
      'DynamoDB',
    ],

    liveUrl: 'https://proofsandtrials.netlify.app/',
    githubUrl: '',

    details: {
      screenshots: [
        {
          image: '1.png',
          title: 'Home',
        },
        {
          image: '2.png',
          title: 'Responsive',
        },
        {
          image: '3.png',
          title: 'Services',
        },
        {
          image: '4.png',
          title: 'Map',
        },
        {
          image: '5.png',
          title: 'Certificate consult',
        },
        {
          image: '6.png',
          title: 'Admin',
        },
        {
          image: '7.png',
          title: 'Admin panel',
        },
      ],
    },
  },


] as const satisfies readonly Project[];

export const projectTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
].sort();
