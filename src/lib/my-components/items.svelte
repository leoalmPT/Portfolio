<script lang="ts">
    import { page } from '$app/state';
    import { fly } from 'svelte/transition';

    import Search, { filter } from "$lib/my-components/search.svelte";
    import Card from '$lib/my-components/card.svelte';
    import Results from '$lib/my-components/results.svelte';

    let {
        data,
        name,
        placeholder,
        tech = false
    } = $props();

    let query = $state(page.url.searchParams.get('q') || "");
    let results = $derived(filter(query, data));
    let counter = $derived(results.length*0-1);
    let first = $derived(results.length === 0);
    first = true;

</script>

<div 
    class="text-center text-5xl font-bold mb-6"
    in:fly|global={{ y: 100, duration: 500, delay: 0 }}
>
    {name}
</div>

<div 
    in:fly|global={{ y: 100, duration: 500, delay: 100 }}
    class="mb-6"
>
    <Search 
        tech={tech}
        bind:query 
        placeholder={placeholder}
    />
</div>

<Results bind:results >
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {#each results as item, index}
            {#key item.title + index}
                <div
                    class="w-full flex justify-center"
                    in:fly|global={{ y: 100, duration: 500, delay: first ? index * 50 + 200 : 50 * counter }}
                    onintrostart={() => counter += 1}
                >
                    <Card {item} />
                </div>
            {/key}
        {/each}
    </div>
</Results>
