export type PostMeta = {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostMeta & { slug: string };

type ContentModule = {
  default: unknown;
  metadata: PostMeta;
};

const modules = import.meta.glob<ContentModule>('/src/lib/content/blog/*.md', {
  eager: true
});

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    return { slug, ...mod.metadata };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  const entry = Object.entries(modules).find(([p]) => p.endsWith(`/${slug}.md`));
  if (!entry) return null;
  const [path, mod] = entry;
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    meta: mod.metadata,
    Component: mod.default as unknown as import('svelte').Component
  };
}
