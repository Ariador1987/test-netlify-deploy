import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		// importing markdown files as modules is available because we specified it in the svelte.config.js
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies PageLoad;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ slug: 'first-post' }, { slug: 'second-post' }];
}

export const prerender = true;
