<script lang="ts">
    import SearchX from '@lucide/svelte/icons/search-x';
    import { fly } from 'svelte/transition';
    let {
        results = $bindable([]),
        children = null
    } = $props();
</script>

{#if results.length === 0}
    <div class="grow flex flex-col items-center justify-center">
        <div in:fly|global={{ y: 100, duration: 500, delay: 0 }}>
            <SearchX size={100} class="mx-auto" />
            <div class=" text-3xl mt-2">No results found</div>
        </div>
    </div>
{:else}
    <div class="grow">
        {@render children?.()}
    </div>
{/if}