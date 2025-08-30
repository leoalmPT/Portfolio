<script module lang="ts">
    import { mode } from "mode-watcher";

    import iconData from "$lib/data/iconData.json";

    const theme = $derived(mode.current ?? 'light');

    export const getSrc = (name: string | undefined) => {
        if (!name) return undefined;
        if (iconData.dark.includes(name) && theme === 'dark') {
            return `/icons/${name}-dark.svg`;
        }
        return `/icons/${name}.svg`;
    }

    export const getDescription = (name: string | undefined) => {
        return iconData.descriptions[name as keyof IconDescription] ?? name;
    }
</script>

<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";

    import { type Skill } from "$lib/data/types";

    type IconDescription = typeof iconData.descriptions;

    let { 
        name = undefined,
        href = undefined,
        link = false,
        new_window = false,
        size = 2.5,
    } = $props<{ name?: string | Skill, href?: string, link?: boolean, new_window?: boolean, size?: number }>();

    if (link) href = `/projects?q=tech:${encodeURIComponent(name)}`;
    const description = getDescription(name);
</script>

<Tooltip.Provider delayDuration={0}>
  <Tooltip.Root>
    <Tooltip.Trigger>
        <Button
            variant="outline"
            class="p-0.5 flex items-center justify-center shadow-xl border-2 hover:!border-primary transition-transform duration-150 ease-in-out hover:scale-105"
            style="width: {size}rem; height: {size}rem;"
            href={href}
            target={new_window ? "_blank" : undefined}
            rel={new_window ? "noopener noreferrer" : undefined}
        >
            <img src={getSrc(name)} alt={name ? String(name) : undefined} />
        </Button>
    </Tooltip.Trigger>
    {#if description}
        <Tooltip.Content 
            side="bottom" 
            class="bg-accent border border-primary text-foreground"
            arrowClasses="bg-accent border border-primary"
        >
            {description}
        </Tooltip.Content>
    {/if}
    </Tooltip.Root>
</Tooltip.Provider>