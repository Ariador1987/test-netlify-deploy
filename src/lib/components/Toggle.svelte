<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 20 }}>
			<Sun />
		</div>
	{:else}
		<div in:fly={{ y: -20 }}>
			<Moon />
		</div>
	{/if}
</button>

<style lang="scss">
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;

		> * {
			display: flex;
			gap: var(--size-2);
		}
	}
</style>
