<script lang="ts">
    import { page } from '$app/state';
    import { fly } from 'svelte/transition';
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    import Search, { filter } from "$lib/my-components/search.svelte";
    import Card from '$lib/my-components/card.svelte';
    import Results from '$lib/my-components/results.svelte';
    import { type Item } from "$lib/data/types";
    import { itemColors } from "$lib/data/misc";

    let {
        data,
        name,
        placeholder,
        tech = false,
        date = false,
        switches = false,
        shuffle = false
    } = $props();

    if (shuffle) {
        data = data.sort(() => Math.random() - 0.5);
    }
    let query = $derived(page.url.searchParams.get('q') || "");
    const filters = [
        ...(tech ? ["tech"] : []),
        ...(date ? ["after", "before"] : [])
    ]

    let data_ = data;
    let results = $derived(filter(query, data_, true));
    let counter = $derived(results.length*0-1);
    let first = $derived(results.length === 0);
    first = true;

    let categories = $state({
        Experience: true,
        Paper: true,
        Award: true,
        Certification: true,
        Project: true
    });

    type CategoryKey = keyof typeof categories;

    const handleSwitch = () => {
        data_ = data.filter((item: Item) => categories[item.category as CategoryKey]);
        results = filter(query, data_, false);
    }
    const filterNames = {
        Experience: "Experience",
        Paper: "Papers",
        Certification: "Certifications",
        Award: "Awards",
        Project: "Projects"
    }

</script>

<div 
    class="text-center text-5xl font-bold mb-6"
    in:fly|global={{ y: 100, duration: 500, delay: 0 }}
>
    {name}
</div>

<div 
    in:fly|global={{ y: 100, duration: 500, delay: 100 }}
    class="mb-4"
>
    {#key page.url.searchParams.get("q")}
        <Search 
            filters={filters}
            bind:query 
            placeholder={placeholder}
        />
    {/key}
</div>

{#if switches}
    <div 
        class="flex flex-wrap justify-center mb-4 gap-4"
        in:fly|global={{ y: 100, duration: 500, delay: 100 }}
    >
        {#each Object.keys(categories) as category}
            <div class="flex items-center gap-2">
                <Switch
                    bind:checked={categories[category as CategoryKey]}
                    onCheckedChange={handleSwitch}
                    style={{ backgroundColor: categories[category as CategoryKey] ? `${itemColors[category as CategoryKey]} !important` : "" }}
                    id={category}
                />
                <Label for={category} class="text-lg">{filterNames[category as CategoryKey]}</Label>
            </div>
        {/each}
    </div>
{/if}

<div class="mb-2"></div>

<Results bind:results >
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6">
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
