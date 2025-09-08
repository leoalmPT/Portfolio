<script lang="ts">
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import * as Select from "$lib/components/ui/select/index.js";

	let {
		ref = $bindable(null),
		class: className,
		value,
		onchange,
		...restProps
	}: WithoutChildrenOrChild<CalendarPrimitive.YearSelectProps> = $props();

	const handleClick = (yearItem: { value: string | number; label: string }) => {
		if (onchange) {
			const event = {
				currentTarget: {
					value: yearItem.value.toString()
				}
			} as unknown as Event & { currentTarget: EventTarget & HTMLSelectElement };
			onchange(event);
		}
	}

</script>

<!-- <span
	class={cn(
		"has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative flex rounded-md border",
		className
	)}
>
	<CalendarPrimitive.YearSelect bind:ref class="absolute inset-0 opacity-0" {...restProps}>
		{#snippet child({ props, yearItems, selectedYearItem })}
			<select {...props} {value}>
				{#each yearItems as yearItem (yearItem.value)}
					<option
						value={yearItem.value}
						selected={value !== undefined
							? yearItem.value === value
							: yearItem.value === selectedYearItem.value}
					>
						{yearItem.label}
					</option>
				{/each}
			</select>
			<span
				class="[&>svg]:text-muted-foreground flex h-8 select-none items-center gap-1 rounded-md pl-2 pr-1 text-sm font-medium [&>svg]:size-3.5"
				aria-hidden="true"
			>
				{yearItems.find((item) => item.value === value)?.label || selectedYearItem.label}
				<ChevronDownIcon class="size-4" />
			</span>
		{/snippet}
	</CalendarPrimitive.YearSelect>
</span> -->


<div
	class={cn(
		"relative",
	)}
>
	<CalendarPrimitive.YearSelect 
		bind:ref 
		{...restProps}
	>
		{#snippet child({ props, yearItems, selectedYearItem })}
			<Select.Root 
				type="single"
				value={selectedYearItem.value.toString()}
			>
				<Select.Trigger 
					class="!h-8 !bg-gradient-to-br from-card to-secondary cursor-pointer pr-1"
				>
					{selectedYearItem.label}
				</Select.Trigger>
				<Select.Content
					class="!bg-gradient-to-br from-card to-secondary !min-w-fit !h-100 overflow-auto"
				>
					{#each yearItems as yearItem (yearItem.value)}
						<Select.Item 
							value={yearItem.value.toString()}
							onclick={() => handleClick(yearItem)}
							class="cursor-pointer w-fit"
						>
							{yearItem.label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		{/snippet}
	</CalendarPrimitive.YearSelect>
</div>
