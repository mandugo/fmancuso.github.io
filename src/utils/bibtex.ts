import fs from 'node:fs';
import path from 'node:path';
import { BibtexParser } from 'bibtex-js-parser';

export type PubType = 'journal' | 'conference' | 'thesis' | 'other';

export interface Publication {
  id: string;
  type: PubType;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  note?: string;
}

const UMLAUT_MAP: Record<string, string> = {
  a: 'ä', o: 'ö', u: 'ü', A: 'Ä', O: 'Ö', U: 'Ü',
};
const ACCENT_MAP: Record<string, string> = {
  a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú',
  A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú',
};

function cleanLatex(str: string): string {
  let result = str;
  result = result.replace(/\\{1,2}"\{?([aouAOU])\}?/g, (_, c) => UMLAUT_MAP[c] ?? c);
  result = result.replace(/\\{1,2}'\{?([aeioAEIO])\}?/g, (_, c) => ACCENT_MAP[c] ?? c);
  result = result.replace(/\\{1,2}ss\b/g, 'ß');
  return result.replace(/[{}]/g, '');
}

function formatAuthors(raw: string): string {
  return cleanLatex(raw)
    .split(' and ')
    .map((name) => {
      const parts = name.split(',').map((s) => s.trim());
      return parts.length === 2 ? `${parts[1]} ${parts[0]}` : name.trim();
    })
    .join(', ');
}

function extractVenue(entry: Record<string, string>): string {
  return entry.journal || entry.booktitle || entry.school || entry.publisher || '';
}

function normalizePubType(rawType: string): PubType {
  const t = rawType.toLowerCase();
  if (t === 'article') return 'journal';
  if (t === 'inproceedings' || t === 'conference') return 'conference';
  if (t === 'phdthesis' || t === 'mastersthesis' || t === 'thesis') return 'thesis';
  if (t === 'misc' || t === 'techreport' || t === 'book' || t === 'incollection') return 'other';
  return 'other';
}

export function getPublications(): Publication[] {
  const bibPath = path.resolve('src/data/publications.bib');

  let raw: string;
  try {
    raw = fs.readFileSync(bibPath, 'utf-8');
  } catch (err) {
    console.error(`[bibtex] Could not read ${bibPath}:`, (err as Error).message);
    return [];
  }

  let entries: Record<string, string>[];
  try {
    entries = BibtexParser.parseToJSON(raw) as Record<string, string>[];
  } catch (err) {
    console.error('[bibtex] Failed to parse publications.bib:', (err as Error).message);
    return [];
  }

  const pubs: Publication[] = [];

  for (const e of entries) {
    const title = e.title?.trim();
    const author = e.author?.trim();
    if (!title || !author) {
      console.warn(`[bibtex] Skipping entry "${e.id ?? '(no id)'}" — missing title or author.`);
      continue;
    }

    const yearNum = parseInt(e.year ?? '', 10);
    if (Number.isNaN(yearNum)) {
      console.warn(`[bibtex] Skipping entry "${e.id}" — invalid year "${e.year}".`);
      continue;
    }

    pubs.push({
      id: e.id ?? '',
      type: normalizePubType(e.type ?? ''),
      title: cleanLatex(title),
      authors: formatAuthors(author),
      venue: cleanLatex(extractVenue(e)),
      year: yearNum,
      doi: e.doi || undefined,
      url: e.url || (e.doi ? `https://doi.org/${e.doi}` : undefined),
      note: e.note ? cleanLatex(e.note.trim()) : undefined,
    });
  }

  return pubs.sort((a, b) => b.year - a.year);
}
