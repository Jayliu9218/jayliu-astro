export type ProjectSummary = {
  repository: string;
  title: string;
  summary: string;
  category: string;
  language: string;
  tags: string[];
  mark: string;
  url: string;
};

const projects: ProjectSummary[] = [
  {
    repository: 'personal-website',
    title: 'Personal Website',
    summary:
      'An Astro-based academic homepage for research interests, publications, technical notes, projects, and public CVs.',
    category: 'Academic platform',
    language: 'HTML',
    tags: ['Astro', 'Content Collections', 'Static Site'],
    mark: 'WEB',
    url: 'https://github.com/Jayliu9218/personal-website',
  },
  {
    repository: 'py4DSTEM-pipeline',
    title: 'py4DSTEM Pipeline',
    summary:
      'A Windows desktop application for browsing HDF5 data and running guided 4D-STEM processing workflows with review gates.',
    category: 'Scientific software',
    language: 'Python',
    tags: ['PySide6', 'py4DSTEM', 'HDF5', '4D-STEM'],
    mark: '4D',
    url: 'https://github.com/Jayliu9218/py4DSTEM-pipeline',
  },
  {
    repository: 'couple-memory',
    title: 'Couple Memory',
    summary:
      'A responsive Astro site for preserving shared memories through timelines, photographs, travel, food, letters, and small statistics.',
    category: 'Web project',
    language: 'CSS',
    tags: ['Astro', 'Storytelling', 'Responsive'],
    mark: 'CM',
    url: 'https://github.com/Jayliu9218/couple-memory',
  },
  {
    repository: 'phase_orientation_screening',
    title: 'Phase / Orientation Screening',
    summary:
      'A py4DSTEM-based screening workflow for phase identification and orientation mapping with explicit quality-control checks.',
    category: 'Research workflow',
    language: 'Python',
    tags: ['py4DSTEM', 'Phase ID', 'Orientation Mapping'],
    mark: 'QC',
    url: 'https://github.com/Jayliu9218/phase_orientation_screening',
  },
  {
    repository: 'large-4dstem-analysis',
    title: 'Large 4D-STEM Analysis',
    summary:
      'A unified non-visual pipeline for fingerprint screening, Bragg detection, crystallographic indexing, and optional validation.',
    category: 'Scientific pipeline',
    language: 'Python',
    tags: ['4D-STEM', 'Diffraction', 'Indexing'],
    mark: '4D',
    url: 'https://github.com/Jayliu9218/large-4dstem-analysis',
  },
];

export function getProjects(): ProjectSummary[] {
  return projects;
}
