<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { mode } from "mode-watcher";
    import darkIcons from "$lib/data/darkIcons.json";
    import iconDescriptions from "$lib/data/iconDescriptions.json";

    type IconDescription = typeof iconDescriptions;

    let { 
        name = undefined,
        href = undefined,
        new_window = false,
        size = 2.5,
    } = $props<{ name?: string, href?: string, new_window?: boolean, size?: number }>();

    const theme = $derived(mode.current ?? 'light');
    let getSrc = $derived(() => {
        if (!name) return undefined;
        if (darkIcons.includes(name) && theme === 'dark') {
            return `/icons/${name}-dark.svg`;
        }
        return `/icons/${name}.svg`;
    });
    const description = name ? iconDescriptions[name as keyof IconDescription] : undefined;
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
        <Button
            variant="outline"
            class="p-0.5 flex items-center justify-center shadow-xl border-2"
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