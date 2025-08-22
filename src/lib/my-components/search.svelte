<script module lang="ts">
    export { default as Search } from "./search.svelte";

    export const filter = (q: string, data: Array<any>) => {
        let skillQuery = "";
        let generalQuery = q;

        const techMatch = q.match(/tech:([^\s]+)/);
        if (techMatch) {
            skillQuery = techMatch[1].toLowerCase();
            generalQuery = q.replace(techMatch[0], "").trim();
        }

        const lowercasedGeneralQuery = generalQuery.toLowerCase();

        return data.filter((item: any) => {
            const matchesSkill = skillQuery
                ? item.skills?.some?.((skill: string) => skill.toLowerCase().includes(skillQuery))
                : true; 

            const matchesGeneral = lowercasedGeneralQuery
                ? item.title.toLowerCase().includes(lowercasedGeneralQuery) ||
                item.description.toLowerCase().includes(lowercasedGeneralQuery) ||
                item.skills?.some?.((skill: string) => skill.toLowerCase().includes(lowercasedGeneralQuery))
                : true;

            return matchesSkill && matchesGeneral;
        });
    };
</script>

<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import Search from "@lucide/svelte/icons/search";
    import X from "@lucide/svelte/icons/x";
    import { fade } from 'svelte/transition';
    

    let { 
        placeholder = "Search...",
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let show = $state(false);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    $effect(() => {
        q;
        show = false
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            query = q;
            show = q == "";
        }, 500);
    });
</script>

<div class="w-full flex items-center relative max-w-3xl mx-auto">
    <Search class="absolute text-muted-foreground left-2"/>
    {#if q}
        <X 
            class="absolute text-muted-foreground right-2 cursor-pointer hover:text-primary"
            onclick={() => q = ""}
        />
    {/if}
    <Input 
        bind:value={q} 
        placeholder={placeholder}
        onfocus={() => focused = true}
        onblur={() => focused = false}
        type="text" 
        class="!text-base pl-10 focus-visible:ring-primary !bg-gradient-to-br from-card to-secondary"
    />
    <!-- {#if focused && show}
        <div 
            class="absolute w-full mt-12 top-0 z-50 cursor-pointer"
            transition:fade|global={{ duration: 100 }}
        >
            <Card.Root class="p-2 gap-2">
                <div class="h-10 w-full hover:bg-muted"></div>
                <div class="h-10 w-full hover:bg-muted"></div>
                <div class="h-10 w-full hover:bg-muted"></div>
            </Card.Root>
        </div>
    {/if} -->
</div>
