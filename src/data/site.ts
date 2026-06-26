export const siteConfig = {
  // ── Edit these fields with your information ──────────────
  name: 'Francesco Mancuso',
  role: {
    en: 'Researcher at RaSS National Inter-University Consortium for Telecommunications (CNIT)',
    it: 'Ricercatore presso RaSS - Consorzio Nazionale Interuniversitario per le Telecomunicazioni (CNIT)',
  },
  tagline: {
    en: 'Radar Imaging, Signal Processing and Electronic Warfare',
    it: 'Radar Imaging, Elaborazione del Segnale e Guerra Elettronica',
  },
  description: {
    en: 'Personal academic website of Francesco Mancuso. Research in radar imaging, signal processing, and electronic warfare.',
    it: 'Sito accademico personale di Francesco Mancuso. Ricerca in radar imaging, elaborazione del segnale e guerra elettronica.',
  },
  // Social links — leave empty string to hide
  social: {
    email: 'francesco.mancuso@cnit.it',
    github: 'https://github.com/mandugo',
    scholar: 'https://scholar.google.com/citations?user=UwVa-gsAAAAJ',
    orcid: 'https://orcid.org/0000-0003-4174-7816',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/mancuso-f',
  },
} as const;

export type Lang = 'en' | 'it';
