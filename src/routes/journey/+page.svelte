<script lang="ts">
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fly } from 'svelte/transition';
    import CircleQuestionMark from "$lib/assets/circleQuestionMark.svelte";

    import Search, { filter } from "$lib/my-components/search.svelte";
    import Results from "$lib/my-components/results.svelte";
    import { type Item } from "$lib/data/types";

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
    let results = $derived(filter(query, data));
    let categories = $state({
        Experience: true,
        Paper: true,
        Award: true,
        Certification: true,
    });
    let first = $state(true);
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

<div ></div>

<div 
    class="text-center text-5xl font-bold mb-6"
    in:fly|global={{ y: 100, duration: 500, delay: 0 }}
    onintrostart={() => {first = false}}
>
    Journey
</div>

<div in:fly|global={{ y: 100, duration: 500, delay: 100 }}>
    <Search 
        bind:query 
        placeholder="Search for titles, descriptions or even skills..."
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
                class={categories[category as CategoryKey] ? filterNamesColors[category as CategoryKey][1] : ""}
                id={category}
            />
            <Label for={category} class="text-lg">{filterNamesColors[category as CategoryKey][0]}</Label>
        </div>
    {/each}

    <a href="/projects" class=" flex items-center hover:underline hover:text-primary">
        <CircleQuestionMark /> 
        <span class="text-lg ml-2">Projects</span>
    </a>
</div>

<Results bind:results >
    {#each results as item, index}
        <div class={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            {#key item.title + index}
                <div 
                    class={`flex-1 flex justify-center py-4 lg:p-10 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}
                    in:fly|global={{ y: 100, duration: 500, delay: first ? index * 100 + 400 : 100 * index }}
                >
                    <div class="w-full max-w-xl fly-scroll h-[200px] debug">
                    </div>
                </div>
            {/key}
            <div 
                class="border-2 border-primary hidden lg:inline relative"
                in:fly|global={{ y: 100, duration: 500, delay: 300 }}
            >
                <div class="absolute h-10 w-10 debug top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div class={`absolute w-21 border-2 border-primary bottom-[-4px] ${index % 2 === 0 ? "right-[-2px]" : "left-[-2px]"}`}></div>
            </div>
            <div class="hidden flex-1 lg:inline">
            </div>
        </div>
    {/each}
</Results>
