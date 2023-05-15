<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	import { Header, Footer } from './index';
	import Transition from './Transition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="layout">
	<Header />

	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>

	<Footer />
</div>

<style lang="scss">
	.layout {
		height: 100%;
		// max-width is this below
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		// instead of margin: 0 auto
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media only screen and (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
