export type ProjectMeta = {
  title: string;
  summary: string;
  year: number;
  tags: string[];
  repo?: string;
  link?: string;
};

export type Project = ProjectMeta & { slug: string };

type ContentModule = {
  default: unknown;
  metadata: ProjectMeta;
};

const modules = import.meta.glob<ContentModule>('/src/lib/content/projects/*.md', {
  eager: true
});

export const projects: Project[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    return { slug, ...mod.metadata };
  })
  .sort((a, b) => b.year - a.year);

export function getProject(slug: string) {
  const entry = Object.entries(modules).find(([p]) => p.endsWith(`/${slug}.md`));
  if (!entry) return null;
  const [path, mod] = entry;
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    meta: mod.metadata,
    Component: mod.default as unknown as import('svelte').Component
  };
}
