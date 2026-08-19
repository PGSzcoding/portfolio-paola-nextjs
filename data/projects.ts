export type ProjectId =
  | 'proofs-trials'
  | 'layout-aleman'
  | 'hospitality-platform'
  | 'bookshelf'
  | 'tekoestudio'
  | 'chat-app';

export type ProjectCategory = 'fullstack' | 'freelance' | 'Full-Stack Project';

export interface Project {
  id: ProjectId;
  image: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  title: string;
  liveUrl?: string;
  githubUrl?: string;

  details: {
    overview: string;
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
    description:
      'A full-stack web application for managing, storing and verifying digital certificates securely.',

    image: '/images/default-proyect.png',

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
      overview:
        'I designed and developed a custom platform with a public certificate verification portal and an administrative dashboard for managing records, users and documents. The system integrates AWS services for secure file storage and database management.',

      screenshots: [
        {
          image: '/images/default-proyect.png',
          title: 'Certificate verification',
        },
        {
          image: '/images/default-proyect.png',
          title: 'Admin dashboard',
        },
        {
          image: '/images/default-proyect.png',
          title: 'Certificate management',
        },
      ],
    },
  },


] as const satisfies readonly Project[];

export const projectTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
].sort();
