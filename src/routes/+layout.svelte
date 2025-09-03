<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { beforeNavigate } from '$app/navigation';

	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/my-components/navbar.svelte';
	import Background from '$lib/my-components/background.svelte';
	
	let { children } = $props();
	let scrollContainer : HTMLDivElement;

	beforeNavigate((nav) => {
		if (!scrollContainer) return;
		if (nav.to?.url.href !== nav.from?.url.href) {
			scrollContainer.scrollTop = 0;
		} else {
			scrollContainer.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	});

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Background />

<div class="flex flex-col h-[100vh]">
	<Navbar />
	<div 
		class="flex-1 overflow-auto flex flex-col" 
		bind:this={scrollContainer}
	>
		<div class="flex-1 container mx-auto my-6 p-6 bg-background/50 backdrop-blur-md rounded-4xl border-2 flex flex-col">
			{@render children?.()}
		</div>
	</div>
</div>
