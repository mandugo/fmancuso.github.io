export interface CvData {
  profile: string;
  experience: {
    title: string;
    organization: string;
    location: string;
    date: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    date: string;
    description?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  contact: {
    label: string;
    value: string;
    href?: string;
  }[];
}

export const cv: Record<'en' | 'it', CvData> = {
  en: {
    profile:
      'Researcher at RaSS (Radar and Surveillance Systems) National Laboratory of CNIT, with expertise in radar imaging, 3D interferometric ISAR, polarimetry, and remote sensing. Author of 15+ publications in IEEE journals and international conferences. Research focuses on non-cooperative target recognition, advanced signal processing techniques for radar systems, and AI-driven radar cybersecurity.',
    experience: [
      {
        title: 'Researcher',
        organization: 'RaSS National Laboratory — CNIT',
        location: 'Pisa, Italy',
        date: '2022 – Present',
        description:
          'Research on 3D interferometric ISAR imaging, polarimetric radar signal processing, and automatic target recognition. Contributing to NATO SPS projects on counter-drone systems. Published in IEEE Transactions on Radar Systems, IEEE Transactions on Computational Imaging, and IEEE Access.',
      },
    ],
    education: [
      {
        degree: 'Ph.D. in Information Engineering',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2021 – 2025',
        description:
          'Thesis: "Novel 3D Interferometric Inverse Synthetic Aperture Radar Imaging Techniques for Non-Cooperative Target Recognition"',
      },
      {
        degree: 'M.Sc. in Telecommunications Engineering',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2019 – 2021',
        description:
          'Thesis: "Sviluppo e validazione di tecniche di formazione di ISAR tridimensionali polarimetriche"',
      },
    ],
    skills: [
      {
        category: 'Research Areas',
        items: ['Radar Imaging', 'ISAR / InISAR', 'Polarimetry', 'Remote Sensing', 'Automatic Target Recognition'],
      },
      {
        category: 'Signal Processing',
        items: ['SAR/ISAR Processing', 'Phase Unwrapping', 'Interferometry', '3D Reconstruction', 'Polarimetric Decomposition'],
      },
      {
        category: 'Programming',
        items: ['MATLAB', 'Python', 'PyTorch', 'C/C++', 'LaTeX'],
      },
      {
        category: 'Languages',
        items: ['Italian (native)', 'English (fluent)'],
      },
    ],
    contact: [
      { label: 'Email', value: 'francesco.mancuso@cnit.it', href: 'mailto:francesco.mancuso@cnit.it' },
      { label: 'Google Scholar', value: 'Francesco Mancuso', href: 'https://scholar.google.com/citations?user=UwVa-gsAAAAJ' },
      { label: 'GitHub', value: 'mandugo', href: 'https://github.com/mandugo' },
    ],
  },

  it: {
    profile:
      'Ricercatore presso il Laboratorio Nazionale RaSS (Radar and Surveillance Systems) del CNIT, con competenze in radar imaging, ISAR interferometrico 3D, polarimetria e telerilevamento. Autore di oltre 15 pubblicazioni su riviste IEEE e conferenze internazionali. La ricerca si concentra sul riconoscimento di bersagli non cooperativi, tecniche avanzate di elaborazione del segnale radar e cybersecurity radar basata su AI.',
    experience: [
      {
        title: 'Ricercatore',
        organization: 'Laboratorio Nazionale RaSS — CNIT',
        location: 'Pisa, Italia',
        date: '2022 – Presente',
        description:
          'Ricerca su imaging ISAR interferometrico 3D, elaborazione polarimetrica del segnale radar e riconoscimento automatico di bersagli. Contributi a progetti NATO SPS su sistemi anti-drone. Pubblicazioni su IEEE Transactions on Radar Systems, IEEE Transactions on Computational Imaging e IEEE Access.',
      },
    ],
    education: [
      {
        degree: 'Dottorato in Ingegneria dell\'Informazione',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2021 – 2025',
        description:
          'Tesi: "Novel 3D Interferometric Inverse Synthetic Aperture Radar Imaging Techniques for Non-Cooperative Target Recognition"',
      },
      {
        degree: 'Laurea Magistrale in Ingegneria delle Telecomunicazioni',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2019 – 2021',
        description:
          'Tesi: "Sviluppo e validazione di tecniche di formazione di ISAR tridimensionali polarimetriche"',
      },
    ],
    skills: [
      {
        category: 'Aree di Ricerca',
        items: ['Radar Imaging', 'ISAR / InISAR', 'Polarimetria', 'Telerilevamento', 'Riconoscimento Automatico di Bersagli'],
      },
      {
        category: 'Elaborazione del Segnale',
        items: ['Elaborazione SAR/ISAR', 'Phase Unwrapping', 'Interferometria', 'Ricostruzione 3D', 'Decomposizione Polarimetrica'],
      },
      {
        category: 'Programmazione',
        items: ['MATLAB', 'Python', 'PyTorch', 'C/C++', 'LaTeX'],
      },
      {
        category: 'Lingue',
        items: ['Italiano (madrelingua)', 'Inglese (fluente)'],
      },
    ],
    contact: [
      { label: 'Email', value: 'francesco.mancuso@cnit.it', href: 'mailto:francesco.mancuso@cnit.it' },
      { label: 'Google Scholar', value: 'Francesco Mancuso', href: 'https://scholar.google.com/citations?user=UwVa-gsAAAAJ' },
      { label: 'GitHub', value: 'mandugo', href: 'https://github.com/mandugo' },
    ],
  },
};
