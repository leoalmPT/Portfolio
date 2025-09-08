<script lang="ts">
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fly, slide } from 'svelte/transition';
    import CircleQuestionMark from "$lib/assets/circleQuestionMark.svelte";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";

    import Search, { filter } from "$lib/my-components/search.svelte";
    import Results from "$lib/my-components/results.svelte";
    import { type Item } from "$lib/data/types";
    import itemColors from "$lib/data/itemColors.json";
    import Card from "$lib/my-components/card.svelte";

    import { experiences } from "$lib/data/experience";
    import { papers } from "$lib/data/papers";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";

    const originalData: Array<Item> = [...experiences, ...papers, ...awards, ...certifications];
    originalData.sort((a, b) => {
        const dateA = new Date((a as any).date).getTime();
        const dateB = new Date((b as any).date).getTime();
        return dateB - dateA;
    });
    let data = originalData
    let query = $state("");
    let filters = ["tech", "after", "before"];
    let results = $derived(filter(query, data, false));
    let categories = $state({
        Experience: true,
        Paper: true,
        Award: true,
        Certification: true,
    });
    let counter = $derived(results.length*0-1);
    let first = $derived(results.length === 0);
    first = true;
    type CategoryKey = keyof typeof categories;

    const handleSwitch = () => {
        data = originalData.filter(item => categories[item.category as CategoryKey]);
        results = filter(query, data, false);
    }
    
    const filterNames = {
        Experience: "Experience",
        Paper: "Papers",
        Certification: "Certifications",
        Award: "Awards",
    }

</script>

<div 
    class="text-center text-5xl font-bold mb-6"
    in:fly|global={{ y: 100, duration: 500, delay: 0 }}
>
    Journey
</div>

<div in:fly|global={{ y: 100, duration: 500, delay: 100 }}>
    <Search 
        filters={filters}
        bind:query 
        placeholder="Search for titles, descriptions, dates or even technologies..."
    />
</div>

<div 
    class="flex flex-wrap justify-center my-4 gap-4"
    in:fly|global={{ y: 100, duration: 500, delay: 200 }}
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

    <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
            <Tooltip.Trigger>
                <a href="/projects" class=" flex items-center hover:underline hover:text-primary">
                    <CircleQuestionMark /> 
                    <span class="text-lg ml-2">Projects</span>
                </a>
            </Tooltip.Trigger>
            <Tooltip.Content 
                side="bottom" 
                class="bg-accent border border-primary text-foreground"
                arrowClasses="bg-accent border border-primary"
            >
                Projects not listed here, click to see them!
            </Tooltip.Content>
        </Tooltip.Root>
    </Tooltip.Provider>
</div>

<Results bind:results >
    {#each results as item, index}
        <div class={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            {#key item.title + index}
                <div 
                    class={`flex-1 flex justify-center py-4 lg:p-10 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}
                    in:fly|global={{ y: 100, duration: 500, delay: first ? index * 100 + 500 : 100 * counter }}
                    onintrostart={() => counter += 1}
                >
                    <Card {item} />
                </div>
            {/key}
            <div 
                class="border-2 border-primary hidden lg:inline relative"
                in:slide|global={{ duration: 100, delay: first ? 400 + 100 * index : 100 * counter }}
            >
                <div class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index % 2 === 0 ? "ml-[-20px]" : "ml-[20px] rotate-180"}`}>
                    <div class="border-t-10 border-b-10 border-r-20 border-t-transparent border-b-transparent border-r-primary"></div>
                </div>
                <div class={`absolute w-21 border-2 border-primary bottom-[-4px] ${index % 2 === 0 ? "right-[-2px]" : "left-[-2px]"}`}></div>
            </div>
            <div class="hidden flex-1 lg:inline">
            </div>
        </div>
    {/each}
</Results>
