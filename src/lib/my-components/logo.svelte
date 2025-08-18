<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { mode } from "mode-watcher";
    import iconData from "$lib/data/iconData.json";

    type IconDescription = typeof iconData.descriptions;

    let { 
        name = undefined,
        href = undefined,
        new_window = false,
        size = 2.5,
    } = $props<{ name?: string, href?: string, new_window?: boolean, size?: number }>();

    const theme = $derived(mode.current ?? 'light');
    let getSrc = $derived(() => {
        if (!name) return undefined;
        if (iconData.dark.includes(name) && theme === 'dark') {
            return `/icons/${name}-dark.svg`;
        }
        return `/icons/${name}.svg`;
    });
    const description = iconData.descriptions[name as keyof IconDescription] ?? name;
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
            <img src={getSrc()} alt={name ? String(name) : undefined} />
        </Button>
    </Tooltip.Trigger>
    {#if description}
        <Tooltip.Content side="bottom">
            {description}
        </Tooltip.Content>
    {/if}
    </Tooltip.Root>
</Tooltip.Provider>