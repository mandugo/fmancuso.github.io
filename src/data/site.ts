export const siteConfig = {
  // ── Edit these fields with your information ──────────────
  name: 'Francesco Mancuso',
  role: {
    en: 'Researcher at RaSS National Inter-University Consortium for Telecommunications (CNIT)',
    it: 'Ricercatore presso RaSS - Consorzio Nazionale Interuniversitario per le Telecomunicazioni (CNIT)',
  },
  tagline: {
    en: 'Radar Imaging, Remote Sensing & Electronic Warfare',
    it: 'Radar Imaging, Telerilevamento e Guerra Elettronica',
  },
  description: {
    en: 'Personal academic website of Francesco Mancuso — research in radar imaging, 3D InISAR, polarimetry, and remote sensing.',
    it: 'Sito accademico personale di Francesco Mancuso — ricerca in radar imaging, 3D InISAR, polarimetria e telerilevamento.',
  },
  // Social links — leave empty string to hide
  social: {
    email: 'francesco.mancuso@cnit.it',
    github: 'https://github.com/mandugo',
    scholar: 'https://scholar.google.com/citations?user=UwVa-gsAAAAJ',
    orcid: '',
    twitter: '',
    linkedin: '',
  },
} as const;

export type Lang = 'en' | 'it';
