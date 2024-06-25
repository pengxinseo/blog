import postsData from './posts.json';
import type { Post } from './types';

export const queryAllPosts = (): Post[] => {
  return postsData;
};

export const queryPostBySlug = (slug: string): Post | undefined => {
  return postsData.find(post => post.slug === slug);
};
