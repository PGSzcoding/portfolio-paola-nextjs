'use client';

import {
  createContext,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from 'react';

import {
  Language,
  translations,
} from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

const STORAGE_KEY = 'portfolio-language';

const isValidLanguage = (
  language: string | null
): language is Language => {
  return (
    language === 'en' ||
    language === 'es' ||
    language === 'fr'
  );
};

function subscribe(callback: () => void) {
  window.addEventListener(
    'language-change',
    callback
  );

  return () => {
    window.removeEventListener(
      'language-change',
      callback
    );
  };
}

function getSnapshot(): Language {
  const savedLanguage =
    localStorage.getItem(STORAGE_KEY);

  return isValidLanguage(savedLanguage)
    ? savedLanguage
    : 'en';
}

function getServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLanguage = (
    newLanguage: Language
  ) => {
    localStorage.setItem(
      STORAGE_KEY,
      newLanguage
    );

    window.dispatchEvent(
      new Event('language-change')
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    );
  }

  return context;
}