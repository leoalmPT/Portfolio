<script lang="ts">
    import Search, { filter } from "$lib/my-components/search.svelte";
    import { type Item } from "$lib/data/types";

    import { experiences } from "$lib/data/experience";
    import { papers } from "$lib/data/papers";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";

    const originalData: Array<Item> = [...experiences, ...papers, ...awards, ...certifications];
    let results = $state<Array<Item>>(originalData);
    let data = originalData
    let query = $state("");
    let categories = $state({
        Award: true,
        Experience: true,
        Paper: true,
        Certification: true,
    });
    type CategoryKey = keyof typeof categories;

    const handleCategoryChange = (category: CategoryKey) => {
        categories[category] = !categories[category];
        data = originalData.filter(item => categories[item.category as CategoryKey]);
        results = filter(query, data);
    };

    $effect(() => {
        results = filter(query, data);
    });
</script>

<div class="text-center text-5xl font-bold">
    Journey
</div>

<Search bind:query placeholder="Search for titles, descriptions or even skills..." />

<!-- button that switch papers -->
<button onclick={() => handleCategoryChange("Paper")}>
    {categories.Paper ? "Hide" : "Show"} Papers
</button>

{#if results.length == 0}
    <span class="text-muted-foreground text-center w-full">
        No results found
    </span>
{:else}
    {#each results as item}
        <div class="border p-4 rounded">
            <h3 class="font-bold">{item.title}</h3>
            <p>{item.description}</p>
        </div>
    {/each}
{/if}