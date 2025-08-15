<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
	let { 
        name = "default",
        href = undefined,
        new_window = false,
        w = 10,
        h = 10
    } = $props();
</script>

<Button
    variant="outline"
    class={`w-${w} h-${h} p-1`}
    href={href}
    target={new_window ? "_blank" : undefined}
    rel={new_window ? "noopener noreferrer" : undefined}
>
    <img src={`/icons/${name}.svg`} alt={name} />
</Button>
