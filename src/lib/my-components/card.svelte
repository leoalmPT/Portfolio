<script lang="ts">
    import { type Item } from "$lib/data/types";
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
    class="w-full max-w-xl fly-scroll bg-gradient-to-br from-card to-secondary relative rounded-xl border-2 p-4 transition-transform duration-150 ease-in-out hover:scale-102 overflow-hidden hover:border-primary block"
    href={href}
>
    <div 
        class="absolute top-0 right-0 w-1/2 h-24 opacity-50"
        style={`background: radial-gradient(ellipse 100% 100% at top right, ${color} 0%, transparent 100%);`}
    ></div>
    
    {#if item.date}
        <div class="absolute top-2 right-2">
            {new Date(item.date).toLocaleString("default", { month: "short", year: "numeric" })}
        </div>
    {/if}
    <div class={`font-bold text-lg truncate ${item.date ? "w-[calc(100%-8rem)]" : "w-full"}`}>
        {item.title}
    </div>

    <div class="mt-2 line-clamp-5 h-30">
        {@html item.description}
    </div>

    {#if item.skills}
        <div class="mt-2 flex gap-2 overflow-hidden p-1 -m-1">
            {#each item.skills as skill}
                <Logo name={skill} link />
            {/each}
        </div>
    {/if}
</a>