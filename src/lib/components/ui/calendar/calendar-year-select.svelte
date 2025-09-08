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
					class="!h-8 !bg-gradient-to-br from-card to-secondary cursor-pointer pr-1 pl-2 hover:border-primary"
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
