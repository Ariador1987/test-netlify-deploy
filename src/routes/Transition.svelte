<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string = '';
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style lang="scss">
	.transition {
		height: 100%;
	}
</style>
