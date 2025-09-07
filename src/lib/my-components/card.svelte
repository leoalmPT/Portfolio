<script lang="ts">
    import Calendar from "@lucide/svelte/icons/calendar";
    import Building2 from "@lucide/svelte/icons/building-2";
    import NotebookPen from "@lucide/svelte/icons/notebook-pen";

    import { type Item } from "$lib/data/types";
    import { getDate } from "$lib/my-components//item.svelte";
    import itemColors from "$lib/data/itemColors.json";
    import Logo from "$lib/my-components/logo.svelte";

    let {
        item
    } = $props<{ item: Item }>();

    const color = itemColors[item.category as keyof typeof itemColors];
    const hrefs = {
        Experience : "/experience",
        Project: "/projects",
        Paper: "/papers",
        Award: "/recognition",
        Certification: "/recognition"
    }

    const href = (hrefs[item.category as keyof typeof hrefs] || "/notfound") + (item.id ? "/" + item.id : "");
</script>


<a 
    class="mycard w-full max-w-xl fly-scroll bg-gradient-to-br from-card to-secondary relative rounded-xl border-2 p-6 transition-transform duration-150 ease-in-out hover:scale-102 overflow-hidden block hover:border-primary"
    href={href}
>
    <div 
        class="absolute top-0 right-0 w-1/2 h-24 opacity-50 z-0"
        style={`background: radial-gradient(ellipse 100% 100% at top right, ${color} 0%, transparent 100%);`}
    ></div>
    
    <div class="w-full relative z-10 flex flex-col h-full">
        <div class="font-bold text-lg line-clamp-2">
            {item.title}
        </div>
        <div class="flex flex-wrap gap-x-4">
            {#if item.company}
                <div class="flex gap-2 mt-2 w-full">
                    <Building2 size={22} class="shrink-0" />
                    <div class="truncate">
                        {item.company}
                    </div>
                </div>
            {/if}
            {#if item.publisher}
                <div class="flex gap-2 mt-2 w-full">
                    <NotebookPen size={22} class="shrink-0" />
                    <div class="truncate">
                        {item.publisher}
                    </div>
                </div>
            {/if}
            {#if item.date}
                <div class="flex gap-2 mt-2">
                    <Calendar size={22} />
                    {getDate(item.date)}
                    {#if item.endDate}
                        - {getDate(item.endDate)}
                    {/if}
                </div>
            {/if}
        </div>

        <div 
            class="my-3 border"
        ></div>

        <div class="line-clamp-6 min-h-24">
            {@html item.description}
        </div>

        {#if item.skills}
            <div class="mt-auto">
                <div 
                    class="mt-2 mb-3 border" 
                ></div>
                <div class="flex gap-2 overflow-hidden p-1 -m-1">
                    {#each item.skills as skill}
                        <Logo name={skill} link />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</a>