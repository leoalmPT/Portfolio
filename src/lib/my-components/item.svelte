<script module lang="ts">
    export const getDate = (dateString: string) => {
        if (dateString === "Present") {
            return "Present";
        }
        return new Date(dateString).toLocaleString("default", { month: "short", year: "numeric" });
    };
</script>


<script lang="ts">
    import { page } from '$app/state';
    import Calendar from "@lucide/svelte/icons/calendar";
    import Building2 from "@lucide/svelte/icons/building-2";
    import NotebookPen from "@lucide/svelte/icons/notebook-pen";
    import { fly } from 'svelte/transition';

    import { type Item as ItemType } from "$lib/data/types";
    import Error from '$lib/my-components/error.svelte';
    import Logo from '$lib/my-components/logo.svelte';

    let {
        data
    } = $props<{ data: ItemType[] }>();

    const id = page.params.id;
    const item = data.find((item: ItemType) => item.id === id);
</script>

{#if item}
    <div class="m-2">

        <div 
            class="flex flex-col gap-y-3 justify-center items-center"
            in:fly|global={{ y: 100, duration: 500, delay: 0 }}
        >
            <div class="text-5xl font-bold">{item.title}</div>
            <div class="flex flex-wrap gap-x-4">
                {#if item.company}
                    <div class="flex gap-2 mt-2">
                        <Building2 size={22} />
                        {item.company}
                    </div>
                {/if}
                {#if item.publisher}
                    <div class="flex gap-2 mt-2">
                        <NotebookPen size={22} />
                        {item.publisher}
                    </div>
                {/if}
                {#if item.date}
                    <div class="flex gap-2 mt-2">
                        <Calendar size={22} />
                        {getDate(item.date)}
                        {#if item.endDate}
                            - {getDate(item.endDate)}
                        {/if}
                    </div>
                {/if}
            </div>
            {#if item.skills}
                <div class="flex flex-wrap gap-2 justify-center">
                    {#each item.skills as skill}
                        <Logo name={skill} link /> 
                    {/each}
                </div>
            {/if}
        </div>

        <div 
            class="my-4 border"
            in:fly|global={{ y: 100, duration: 500, delay: 100 }}
        ></div>

        <div in:fly|global={{ y: 100, duration: 500, delay: 200 }}>
            {#if item.content}
                <div class="prose max-w-none dark:prose-invert text-foreground">
                    <item.content />
                </div>
            {:else}
                {@html item.description}
            {/if}
        </div>
    </div>
{:else}
    <Error />
{/if}