import { en } from './translations/en';
import { es } from './translations/es';
import { fr } from './translations/fr';

export type Language = 'es' | 'en' | 'fr';

export const translations = { es, en, fr } as const;
