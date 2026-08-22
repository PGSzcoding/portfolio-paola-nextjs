'use client'

import { Project } from "@/data/projects"
import ProjectHero from "./ProjectHero"
import { useLanguage } from '@/context/LanguageContext';
import ProjectOverview from "./ProjectOverview";
import { motion, useReducedMotion } from 'motion/react';
export default function ClientProjectPage({ project }: {project:Project}) {
    
    const { t } = useLanguage();
   const content = t.projects.items[project.id as keyof typeof t.projects.items];;
const shouldReduceMotion = useReducedMotion();
    return (
        <>
            <ProjectHero project={project} description={content.description} />
            <motion.div
      style={{background: '#101014'}}
      initial={shouldReduceMotion ? false : { backgroundColor: '#f8eee6' }}
      whileInView={{ backgroundColor: '#101014' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
            <ProjectOverview project={project} overview = {content.overview}/>

    </motion.div>

            
        </>
    )
}