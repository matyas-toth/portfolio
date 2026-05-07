export type { PostMeta } from "./types";

// Import metadata from each MDX file

import { meta as post1 } from "./the-gpu-war-nobody-is-talking-about.mdx";

import type { PostMeta } from "./types";

/** All posts sorted by date descending (newest first) */
export const allPosts: PostMeta[] = [
  post1,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
