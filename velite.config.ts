import { defineCollection, defineConfig, s } from 'velite';

import { prettyCode } from '@/lib/rehype';

const allPosts = defineCollection({
	name: 'Post',
	pattern: 'blog/**/*.mdx',
	schema: s
		.object({
			title: s.string(),
			slug: s.string(),
			description: s.string(),
			publishedAt: s.isodate(),
			language: s.string(),
			content: s.mdx(),
		})
		.transform(data => ({
			...data,
			year: new Date(data.publishedAt).getFullYear(),
			permalink: `/blog/${data.slug}`,
		})),
});


export default defineConfig({
	collections: { allPosts },
	mdx: {
		rehypePlugins: [
			prettyCode,
		],
	},
});
