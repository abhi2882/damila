export type WorkKind = "pdf" | "audio" | "video" | "text";

export type Work = {
  slug: string;
  title: string;
  kind: WorkKind;
  /** file path under /public, e.g. /works/manifesto.pdf */
  src?: string;
  /** poetic one-line summary */
  whisper: string;
  /** longer description / context */
  description: string;
  /** themes used to draw constellation lines */
  themes: string[];
  /** position on the sky (percentages 0-100) */
  x: number;
  y: number;
  /** star magnitude — visual size hint */
  magnitude?: number;
  year?: string;
};

/**
 * Add new works here. Drop the file in /public/works/ and reference it as
 * `/works/your-file.pdf` (or .mp3 / .mp4). Pick x/y to place the star.
 */
export const works: Work[] = [
  {
    slug: "the-unmaking",
    title: "The Unmaking",
    kind: "text",
    whisper: "a letter to the village that refused our name",
    description:
      "An opening invocation. Notes on inheritance, refusal, and the slow craft of unbecoming what caste asks us to be.",
    themes: ["caste", "kinship", "refusal"],
    x: 22, y: 28, magnitude: 1.4, year: "2024",
  },
  {
    slug: "field-recordings",
    title: "Field Recordings from a Borrowed Tongue",
    kind: "audio",
    src: "/works/sample.mp3",
    whisper: "voices the archive forgot to keep",
    description:
      "A sound work assembled from interviews, lullabies, and the static between languages.",
    themes: ["language", "archive", "queer"],
    x: 68, y: 22, magnitude: 1.1, year: "2024",
  },
  {
    slug: "manifesto-for-soft-uprisings",
    title: "Manifesto for Soft Uprisings",
    kind: "pdf",
    src: "/works/sample.pdf",
    whisper: "tenderness as a strategy of refusal",
    description:
      "A pamphlet, in the samizdat tradition. Fourteen propositions for a world after the brahminical-cis-state.",
    themes: ["queer", "trans", "refusal"],
    x: 45, y: 55, magnitude: 1.6, year: "2025",
  },
  {
    slug: "moving-image-i",
    title: "House Without Foundations",
    kind: "video",
    src: "/works/sample.mp4",
    whisper: "a short film about doors that won't close",
    description:
      "Moving image, 7 min. On chosen family, eviction, and the architectures we build inside our bodies.",
    themes: ["trans", "kinship", "memory"],
    x: 80, y: 70, magnitude: 1.3, year: "2025",
  },
  {
    slug: "almanac",
    title: "Almanac of Small Heresies",
    kind: "text",
    whisper: "a calendar for the disobedient",
    description:
      "Daily entries. Saints uncanonised, festivals reinvented, weather for the unbelieving.",
    themes: ["archive", "kinship", "language"],
    x: 18, y: 72, magnitude: 1.0, year: "ongoing",
  },
  {
    slug: "cartography",
    title: "A Cartography of Caste-Lines",
    kind: "pdf",
    src: "/works/sample.pdf",
    whisper: "maps that name what was meant to stay invisible",
    description:
      "Visual essay. Diagrams of how caste organises rooms, streets, kitchens, beds.",
    themes: ["caste", "memory"],
    x: 52, y: 18, magnitude: 1.2, year: "2023",
  },
];

/** edges between works that share at least one theme */
export function constellationEdges(): Array<[string, string]> {
  const edges: Array<[string, string]> = [];
  for (let i = 0; i < works.length; i++) {
    for (let j = i + 1; j < works.length; j++) {
      const shared = works[i].themes.filter((t) => works[j].themes.includes(t));
      if (shared.length > 0) edges.push([works[i].slug, works[j].slug]);
    }
  }
  return edges;
}
