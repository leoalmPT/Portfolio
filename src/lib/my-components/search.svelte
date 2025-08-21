<script module lang="ts">
    export { default as Search } from "./search.svelte";

    export const filter = (q: string, data: Array<any>) => {
        const lowercasedQuery = q.toLowerCase();
        return data.filter((item: any) => {
            return (
                item.title.toLowerCase().includes(lowercasedQuery) ||
                item.description.toLowerCase().includes(lowercasedQuery) ||
                (item.skills?.some?.((skill: string) => skill.toLowerCase().includes(lowercasedQuery)))
            );
        });
    };
</script>

<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import Search from "@lucide/svelte/icons/search";

    let { 
        placeholder = "Search...",
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    $effect(() => {
        q;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            query = q;
        }, 500);
    });
</script>

<div class="w-full flex items-center relative max-w-3xl mx-auto">
    <Search class="absolute text-muted-foreground ml-2"/>
    <Input 
        bind:value={q} 
        placeholder={placeholder}
        type="text" 
        class="!text-base pl-10"
    />
</div>
