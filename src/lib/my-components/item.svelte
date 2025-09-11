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
    import User from "@lucide/svelte/icons/user";
    import { fly } from 'svelte/transition';

    import { type Item as ItemType } from "$lib/data/types";
    import Error from '$lib/my-components/error.svelte';
    import Logo from '$lib/my-components/logo.svelte';
    import { itemColors } from "$lib/data/misc";

    let {
        data
    } = $props<{ data: ItemType[] }>();

    const id = page.params.id;
    const item = data.find((item: ItemType) => item.id === id);
    let color = $state("");
    if (item) color = itemColors[item.category as keyof typeof itemColors];
</script>

{#if item}

    <div 
        class="absolute top-0 right-0 w-1/2 h-30 opacity-50 z-0 sm:rounded-t-[30px]"
        style={`background: radial-gradient(ellipse 100% 100% at top right, ${color} 0%, transparent 100%);`}
    ></div>

    <div class="m-2 relative z-10">

        <div 
            class="flex flex-col gap-y-3 justify-center items-center"
            in:fly|global={{ y: 100, duration: 500, delay: 0 }}
        >
            <div 
                class="text-3xl sm:text-5xl font-bold text-center leading-snug"
            >{item.title}</div>
            <div class="flex flex-wrap gap-x-4 gap-y-2">
                {#if item.company}
                    <div class="flex gap-2">
                        <Building2 size={22} class="shrink-0" />
                        {item.company}
                    </div>
                {/if}
                {#if item.publisher}
                    <div class="flex gap-2">
                        <NotebookPen size={22} class="shrink-0" />
                        {item.publisher}
                    </div>
                {/if}
                {#if item.date}
                    <div class="flex gap-2">
                        <Calendar size={22} />
                        {getDate(item.date)}
                        {#if item.endDate}
                            - {getDate(item.endDate)}
                        {/if}
                    </div>
                {/if}
            </div>
            {#if item.authors}
                <div class="flex flex-wrap gap-2 justify-center">
                    {#each item.authors as author}
                        <div 
                            class="flex gap-2"
                            class:font-bold={author === "Leonardo Almeida"}
                        >
                            <User size={22} />
                            {author}
                        </div>
                    {/each}
                </div>
            {/if}
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
                <div class="prose max-w-none dark:prose-invert prose-a:text-primary prose-img:rounded-lg prose-img:border-2 marker:text-foreground">
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