<script lang="ts">
	import Logo from "$lib/my-components/logo.svelte";
    import info from "$lib/data/home.json";
</script>

<div class="flex">
    {#each Object.entries(info.socials) as [name, href]}
        <Logo name={name} href={href} new_window/>
    {/each}
</div>a 