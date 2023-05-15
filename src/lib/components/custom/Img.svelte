<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<img {src} alt={alt || 'Svelte'} loading="lazy" />

<style lang="scss">
</style>
