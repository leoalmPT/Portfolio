<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/my-components/navbar.svelte';
	import Background from '$lib/my-components/background.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Background />

<div class="flex flex-col h-[100vh]">
	<Navbar />
	<div class="flex-1 overflow-auto flex flex-col">
		<div class="flex-1 container mx-auto my-6 p-6 bg-background/50 backdrop-blur-md rounded-4xl border-2">
			{@render children?.()}
		</div>
	</div>
</div>
