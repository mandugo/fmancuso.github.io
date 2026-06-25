import type { Lang } from '../data/site';

const ui = {
  en: {
    'nav.home': 'Home',
    'nav.cv': 'CV',
    'nav.publications': 'Publications',
    'nav.blog': 'Blog',
    'home.latest': 'Latest Posts',
    'home.viewAll': 'View all posts',
    'home.noPosts': 'No articles yet — stay tuned!',
    'home.links': 'Quick Links',
    'cv.title': 'Curriculum Vitae',
    'cv.profile': 'Profile',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.awards': 'Awards & Achievements',
    'cv.skills': 'Skills',
    'cv.contact': 'Contact',
    'pub.title': 'Publications',
    'pub.filterYear': 'Filter by year:',
    'pub.filterType': 'Filter by type:',
    'pub.all': 'All',
    'blog.title': 'Blog',
    'blog.back': 'Back to blog',
    'blog.readMore': 'Read more',
    'blog.noPosts': 'No posts yet.',
    'blog.tagTitle': 'Posts tagged',
    'blog.allTags': 'All tags',
    'footer.rss': 'RSS Feed',
    'footer.rights': 'All rights reserved.',
    'footer.llm': 'This website was built with the assistance of LLMs.',
  },
  it: {
    'nav.home': 'Home',
    'nav.cv': 'CV',
    'nav.publications': 'Pubblicazioni',
    'nav.blog': 'Blog',
    'home.latest': 'Ultimi Articoli',
    'home.viewAll': 'Vedi tutti gli articoli',
    'home.noPosts': 'Ancora nessun articolo — torna presto!',
    'home.links': 'Link Rapidi',
    'cv.title': 'Curriculum Vitae',
    'cv.profile': 'Profilo',
    'cv.experience': 'Esperienza',
    'cv.education': 'Formazione',
    'cv.awards': 'Premi e riconoscimenti',
    'cv.skills': 'Competenze',
    'cv.contact': 'Contatti',
    'pub.title': 'Pubblicazioni',
    'pub.filterYear': 'Filtra per anno:',
    'pub.filterType': 'Filtra per tipo:',
    'pub.all': 'Tutti',
    'blog.title': 'Blog',
    'blog.back': 'Torna al blog',
    'blog.readMore': 'Leggi di più',
    'blog.noPosts': 'Nessun articolo ancora.',
    'blog.tagTitle': 'Articoli con tag',
    'blog.allTags': 'Tutti i tag',
    'footer.rss': 'Feed RSS',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.llm': 'Questo sito è stato realizzato con l\'assistenza di LLM.',
  },
} as const;

type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export function langPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/it${clean}`;
}

export function alternateUrl(currentPath: string): { en: string; it: string } {
  const stripped = currentPath.replace(/^\/it(\/|$)/, '/');
  return {
    en: stripped || '/',
    it: `/it${stripped === '/' ? '' : stripped}`,
  };
}
