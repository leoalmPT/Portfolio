<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";

	type $$Props = WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
		orientation?: "horizontal" | "vertical";
	};

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		orientation = "horizontal",
		...restProps
	}: $$Props = $props();
</script>

<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	class={cn(
		"bg-primary/20 relative overflow-hidden rounded-full",
		orientation === "horizontal" ? "h-2 w-full" : "w-2 h-full",
		className
	)}
	{value}
	{max}
	{...restProps}
>
	<div
		data-slot="progress-indicator"
		class="bg-primary h-full w-full flex-1 transition-all"
		style={orientation === 'horizontal'
			? `transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`
			: `transform: translateY(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
	></div>
</ProgressPrimitive.Root>