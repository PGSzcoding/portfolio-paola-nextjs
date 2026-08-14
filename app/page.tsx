'use client';

import { useState } from 'react';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Loader from '@/components/Loader';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import AiTwin from '@/components/AiTwin/AiTwin';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  const [isLoading, setIsLoading] =
    useState(true);

  return (
    <>
      <ScrollProgress />
      {isLoading && (
        <Loader
          onComplete={() =>
            setIsLoading(false)
          }
        />
      )}

      <Header />

      <main>
        <Hero />
        <About/>
        <Projects/>
        <AiTwin />
      </main>
      <Footer/>
    </>
  );
}
