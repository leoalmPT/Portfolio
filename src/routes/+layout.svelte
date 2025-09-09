<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/state';

	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/my-components/navbar.svelte';
	import Background from '$lib/my-components/background.svelte';
	
	let { children } = $props();
	let scrollContainer : HTMLDivElement;
	let pathname = $derived(page.url.pathname.split('/')[1] || 'home');

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
	<title>Portfolio | {pathname.charAt(0).toUpperCase() + pathname.slice(1)} </title>
	<meta name="description" content="Personal Portfolio" />
	<meta name="author" content="Leonardo Almeida" />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Background />

<div class="flex flex-col h-[100vh]">
	<Navbar />
	<div 
		class="flex-1 overflow-auto flex flex-col" 
		bind:this={scrollContainer}
	>
		<div class="flex-1 container mx-auto sm:my-6 px-1 py-6 sm:p-6 bg-background/50 backdrop-blur-md sm:rounded-4xl border-2 flex flex-col">
			{#key page.url.pathname}
				{@render children?.()}
			{/key}
		</div>
	</div>
</div>
