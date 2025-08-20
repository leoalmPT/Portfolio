<script lang="ts">
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import CircleQuestionMark from "$lib/assets/circleQuestionMark.svelte";

    import Search, { filter } from "$lib/my-components/search.svelte";
    import { type Item } from "$lib/data/types";

    import { experiences } from "$lib/data/experience";
    import { papers } from "$lib/data/papers";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";

    const originalData: Array<Item> = [...experiences, ...papers, ...awards, ...certifications];
    let data = originalData
    let query = $state("");
    let results = $derived(filter(query, data));
    let categories = $state({
        Experience: true,
        Paper: true,
        Award: true,
        Certification: true,
    });
    type CategoryKey = keyof typeof categories;

    const handleSwitch = () => {
        data = originalData.filter(item => categories[item.category as CategoryKey]);
        results = filter(query, data);
    }

    const filterNamesColors = {
        Experience: ["Experience", "!bg-blue-500"],
        Paper: ["Papers", "!bg-green-500"],
        Certification: ["Certifications", "!bg-red-500"],
        Award: ["Awards", "!bg-yellow-500"],
    }
</script>

<div class="text-center text-5xl font-bold mb-6">
    Journey
</div>

<Search bind:query placeholder="Search for titles, descriptions or even skills..." />

<div class="flex flex-wrap justify-center mt-4 gap-4">
    {#each Object.keys(categories) as category}
        <div class="flex items-center gap-2">
            <Switch
                bind:checked={categories[category as CategoryKey]}
                onCheckedChange={handleSwitch}
                class={categories[category as CategoryKey] ? filterNamesColors[category as CategoryKey][1] : ""}
                id={category}
            />
            <Label for={category} class="text-lg">{filterNamesColors[category as CategoryKey][0]}</Label>
        </div>
    {/each}

    <a href="/projects" class="h-full flex items-center hover:underline hover:text-primary">
        <CircleQuestionMark /> 
        <span class="text-lg ml-2">Projects</span>
    </a>
</div>

<span>
    {JSON.stringify(categories)}
</span>

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