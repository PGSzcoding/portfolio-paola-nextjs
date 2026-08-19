import { notFound } from 'next/navigation';

import { projects } from '@/data/projects';
import styles from '@/components/Projects/Project/Project.module.css'
import ProjectHero from '@/components/Projects/Project/ProjectHero';
import ProjectOverview from '@/components/Projects/Project/ProjectOverview';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
        <Header/>
        <main className={styles.projectPage}>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />
    </main>
      <Footer/>

    </>
    
  );
}