<script lang="ts">
    import { type Item } from "$lib/data/types";
    import itemColors from "$lib/data/itemColors.json";
    import { projects } from "$lib/data/projects";

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
    class="w-full max-w-xl fly-scroll h-[200px] bg-gradient-to-br from-card to-secondary relative rounded-xl border-2 p-4 transition-transform duration-150 ease-in-out hover:scale-102 overflow-hidden hover:border-primary block"
    href={href}
>
    <div 
        class="absolute top-0 right-0 w-1/2 h-24 opacity-50"
        style={`background: radial-gradient(ellipse 100% 100% at top right, ${color} 0%, transparent 100%);`}
    ></div>
    <div class=" text-white">
        <h2 class="font-bold text-lg">{item.title}</h2>
        <p class="text-gray-300 text-sm">{item.description}</p>
    </div>
</a>
