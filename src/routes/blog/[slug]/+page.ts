import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/blog';

export const prerender = true;

export function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    error(404, 'Post not found');
  }
  return { post };
}
