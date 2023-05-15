<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as config from '$lib/config';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;
	const { posts }: { posts: Array<Post> } = data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-block-end: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-block-start: var(--size-3);
	}
</style>
