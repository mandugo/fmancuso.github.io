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
    thesis?: string;
    finalMark?: string;
    href?: string;
  }[];
  awards: {
    year: string;
    title: string;
    detail: string;
    href?: string;
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
      'Researcher at RaSS (Radar and Surveillance Systems) National Laboratory of CNIT, with expertise in radar imaging, 3D interferometric ISAR, polarimetry, and remote sensing. Chartered Professional Engineer registered with the Order of Engineers of the Province of Pisa (Section A – Information Engineering, licensed in 2022 and registered since 2023). Author of 15+ publications in IEEE journals and international conferences. Research focuses on non-cooperative target recognition, advanced signal processing techniques for radar systems, and AI-driven radar cybersecurity.',
    experience: [
      {
        title: 'Researcher',
        organization: 'RaSS National Lab, CNIT',
        location: 'Pisa, Italy',
        date: 'Mar 2025 – Present',
        description:
          'Electronic Warfare, C-ESM, Array Processing.',
      },
      {
        title: 'Research Collaborator',
        organization: 'RaSS National Lab, CNIT',
        location: 'Pisa, Italy',
        date: 'Sep 2021 – Feb 2025',
        description:
          'Radar Interferometry, Radar Polarimetry, ISAR Imaging, Multi-channel Radar, Synchronization.',
      },
      {
        title: 'Digital Signal Processing Tutor',
        organization: 'University of Adelaide',
        location: 'Adelaide, Australia',
        date: 'Jul 2023 – Dec 2023',
        description:
          'Standard Tutorial, Marking.',
      },
      {
        title: 'R&D Engineer',
        organization: 'Move Solutions',
        location: 'Lucca, Italy',
        date: 'Jan 2019 – Jan 2020',
        description:
          'Statistical Signal Processing, Anomalies Detection, Structure Health Monitoring, Wireless Sensors Networks, Electromagnetic Compatibility.',
      },
    ],
    education: [
      {
        degree: 'Visiting fellow',
        institution: 'Adelaide Radar Research Centre, University of Adelaide',
        location: 'Adelaide, Australia',
        date: '2023 – 2024',
        href: 'https://www.adelaide.edu.au/radar/people#students',
      },
      {
        degree: 'Qualification to the Profession',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2022',
        description: 'Information Engineering Sector, Section A',
      },
      {
        degree: 'Ph.D. in Information Engineering',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2021 – 2024',
        thesis: 'Novel 3D Interferometric Inverse Synthetic Aperture Radar Imaging Techniques for Non-Cooperative Target Recognition',
        finalMark: 'Excellent',
      },
      {
        degree: 'M.Sc. Telecommunications Engineering',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2018 – 2021',
        thesis: 'Development and validation of Polarimetric Three-Dimensional ISAR imaging techniques.',
        finalMark: '110/110 cum laude',
      },
      {
        degree: 'B.Sc. Telecommunications Engineering',
        institution: 'University of Pisa',
        location: 'Pisa, Italy',
        date: '2013 – 2017',
        thesis: 'IoT-based botnet and DNS DDoS Attacks: Dyn\'s case analysis.',
        finalMark: '108/110',
      },
      {
        degree: 'High School Diploma',
        institution: 'I.T.I. "E.Scalfaro"',
        location: 'Catanzaro, Italy',
        date: '2008 – 2013',
        description: 'Industrial Engineering: Electronic and Telecommunications',
        finalMark: '100/100',
      },
    ],
    awards: [
      {
        year: '2025',
        title: 'IEEE AESS Radar Challenge 2025 Winner - Third Place',
        detail: 'IEEE Radar Conference 2025 — issued by IEEE Aerospace and Electronic Systems Society (AESS).',
      },
      {
        year: '2025',
        title: 'NATO SET Panel Early Career Award (SPECA)',
        detail: 'Joint SET–SCI Spring PBM 2025 — issued by NATO STO Sensors and Electronics Technology (SET) Panel.',
      },
      {
        year: '2024',
        title: 'Research, Technology and Innovation Paper Award 2024',
        detail: 'Eurosatory 2024 — issued by the European Defence Agency.',
      },
      {
        year: '2024',
        title: 'NATO SET Panel Best Paper Award',
        detail: 'SET-318 Specialists\' Meeting on "Artificial Intelligence (AI) / Machine Learning (ML) for Cognitive Radar (CR)" — issued by NATO Sensors and Electronics Technology Panel.',
      },
      {
        year: '2023',
        title: 'Student Travel Grant',
        detail: 'IEEE LCN 2023 — issued by IEEE Computer Society TCCC.',
      },
      {
        year: '2024',
        title: 'ICT 2024 (16th ICT Innovations Conference 2024), Online.',
        detail: 'Organizing Committee Member. Presentation: "Evaluating Killer Drone Defense: NATO SPS Project Anti-Drones Field Trials".',
        href: 'https://ictinnovations.org/workshop/workshop-innovations-anti-drone-tech',
      },
      {
        year: '2024',
        title: 'IEEE CAES South Australia Invited Talk, Online.',
        detail: 'Presentation: "Novel Techniques for 3D Interferometric Inverse Synthetic Aperture Radar".',
        href: 'https://r10.ieee.org/saus/event/novel-techniques-for-3d-interferometric-inverse-synthetic-aperture-radar/',
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
      {
        label: 'Order of Engineer',
        value: 'Albo degli Ingegneri di Pisa',
        href: 'https://www.ordineingegneripisa.it/istituzione/albo/?m=45j39350n5147e411',
      },
    ],
  },

  it: {
    profile:
      'Ricercatore presso il Laboratorio Nazionale RaSS (Radar and Surveillance Systems) del CNIT, con competenze in radar imaging, ISAR interferometrico 3D, polarimetria e telerilevamento. Ingegnere iscritto all’Ordine degli Ingegneri della Provincia di Pisa (Sezione A – Ingegneria dell’Informazione, abilitato nel 2022 e iscritto dal 2023). Autore di oltre 15 pubblicazioni su riviste IEEE e conferenze internazionali. La ricerca si concentra sul riconoscimento di bersagli non cooperativi, tecniche avanzate di elaborazione del segnale radar e cybersecurity radar basata su AI.',
    experience: [
      {
        title: 'Ricercatore',
        organization: 'Laboratorio Nazionale RaSS, CNIT',
        location: 'Pisa, Italia',
        date: 'Mar 2025 – Presente',
        description:
          'Electronic Warfare, C-ESM, Array Processing.',
      },
      {
        title: 'Collaboratore di Ricerca',
        organization: 'Laboratorio Nazionale RaSS, CNIT',
        location: 'Pisa, Italia',
        date: 'Set 2021 – Feb 2025',
        description:
          'Radar Interferometry, Radar Polarimetry, ISAR Imaging, Multi-channel Radar, Synchronization.',
      },
      {
        title: 'Tutor di Digital Signal Processing',
        organization: 'University of Adelaide',
        location: 'Adelaide, Australia',
        date: 'Lug 2023 – Dic 2023',
        description:
          'Standard Tutorial, Marking.',
      },
      {
        title: 'Ingegnere R&D',
        organization: 'Move Solutions',
        location: 'Lucca, Italia',
        date: 'Gen 2019 – Gen 2020',
        description:
          'Statistical Signal Processing, Anomalies Detection, Structure Health Monitoring, Wireless Sensors Networks, Electromagnetic Compatibility.',
      },
    ],
    education: [
      {
        degree: 'Visiting fellow',
        institution: 'Adelaide Radar Research Centre, University of Adelaide',
        location: 'Adelaide, Australia',
        date: '2023 – 2024',
        href: 'https://www.adelaide.edu.au/radar/people#students',
      },
      {
        degree: 'Abilitazione alla Professione',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2022',
        description: 'Settore Ingegneria dell\'Informazione, Sezione A',
      },
      {
        degree: 'Dottorato in Ingegneria dell\'Informazione',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2021 – 2024',
        thesis: 'Novel 3D Interferometric Inverse Synthetic Aperture Radar Imaging Techniques for Non-Cooperative Target Recognition',
        finalMark: 'Excellent',
      },
      {
        degree: 'Laurea Magistrale in Ingegneria delle Telecomunicazioni',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2018 – 2021',
        thesis: 'Sviluppo e validazione di tecniche di formazione di ISAR tridimensionali polarimetriche.',
        finalMark: '110/110 cum laude',
      },
      {
        degree: 'Laurea Triennale in Ingegneria delle Telecomunicazioni',
        institution: 'Università di Pisa',
        location: 'Pisa, Italia',
        date: '2013 – 2017',
        thesis: 'IoT-based botnet and DNS DDoS Attacks: Dyn\'s case analysis.',
        finalMark: '108/110',
      },
      {
        degree: 'Diploma di Istruzione Secondaria Superiore',
        institution: 'I.T.I. "E.Scalfaro"',
        location: 'Catanzaro, Italia',
        date: '2008 – 2013',
        description: 'Perito Capotecnico: Elettronica e Telecomunicazioni',
        finalMark: '100/100',
      },
    ],
    awards: [
      {
        year: '2025',
        title: 'IEEE AESS Radar Challenge 2025 Winner - Third Place',
        detail: 'IEEE Radar Conference 2025 — issued byIEEE Aerospace and Electronic Systems Society (AESS).',
      },
      {
        year: '2025',
        title: 'NATO SET Panel Early Career Award (SPECA)',
        detail: 'Joint SET–SCI Spring PBM 2025 — NATO STO Sensors and Electronics Technology (SET) Panel.',
      },
      {
        year: '2024',
        title: 'Research, Technology and Innovation Paper Award 2024',
        detail: 'Eurosatory 2024 — European Defence Agency.',
      },
      {
        year: '2024',
        title: 'NATO SET Panel Best Paper Award',
        detail: 'SET-318 Specialists\' Meeting on "Artificial Intelligence (AI) / Machine Learning (ML) for Cognitive Radar (CR)" — NATO Sensors and Electronics Technology Panel.',
      },
      {
        year: '2023',
        title: 'Student Travel Grant',
        detail: 'IEEE LCN 2023 — IEEE Computer Society TCCC.',
      },
      {
        year: '2024',
        title: 'ICT 2024 (16th ICT Innovations Conference 2024), Online.',
        detail: 'Membro del Comitato Organizzatore. Presentazione: "Evaluating Killer Drone Defense: NATO SPS Project Anti-Drones Field Trials".',
        href: 'https://ictinnovations.org/workshop/workshop-innovations-anti-drone-tech',
      },
      {
        year: '2024',
        title: 'IEEE CAES South Australia Invited Talk, Online.',
        detail: 'Presentazione: "Novel Techniques for 3D Interferometric Inverse Synthetic Aperture Radar".',
        href: 'https://r10.ieee.org/saus/event/novel-techniques-for-3d-interferometric-inverse-synthetic-aperture-radar/',
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
      {
        label: 'Ordine Ingegneri',
        value: 'Albo degli Ingegneri di Pisa',
        href: 'https://www.ordineingegneripisa.it/istituzione/albo/?m=45j39350n5147e411',
      },
    ],
  },
};
