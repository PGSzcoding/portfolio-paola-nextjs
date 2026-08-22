import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import styles from '@/components/ProjectsPage/Project/Project.module.css'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ClientProjectPage from '@/components/ProjectsPage/Project/ClientProjectPage';

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
            <ClientProjectPage project={project} />
        </main>
      <Footer/>
    </>
  );
}