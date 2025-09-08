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
	}: WithoutChildrenOrChild<CalendarPrimitive.MonthSelectProps> = $props();

	const handleClick = (monthItem: { value: string | number; label: string }) => {
		if (onchange) {
			const event = {
				currentTarget: {
					value: monthItem.value.toString()
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
	<CalendarPrimitive.MonthSelect 
		bind:ref 
		{...restProps}
	>
		{#snippet child({ props, monthItems, selectedMonthItem })}
			<Select.Root 
				type="single"
				value={selectedMonthItem.value.toString()}
			>
				<Select.Trigger 
					class="!h-8 !bg-gradient-to-br from-card to-secondary cursor-pointer pr-1 pl-2 hover:border-primary"
				>
					{selectedMonthItem.label}
				</Select.Trigger>
				<Select.Content
					class="!bg-gradient-to-br from-card to-secondary !min-w-fit"
				>
					{#each monthItems as monthItem (monthItem.value)}
						<Select.Item 
							value={monthItem.value.toString()}
							onclick={() => handleClick(monthItem)}
							class="cursor-pointer w-fit"
						>
							{monthItem.label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		{/snippet}
	</CalendarPrimitive.MonthSelect>
</div>