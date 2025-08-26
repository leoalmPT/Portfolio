<script lang="ts">
    import { page } from '$app/state';

    import { type Item as ItemType } from "$lib/data/types";
    import Error from '$lib/my-components/error.svelte';
    import Logo from '$lib/my-components/logo.svelte';

    let {
        data
    } = $props<{ data: ItemType[] }>();

    const id = page.params.id;
    const item = data.find((item: ItemType) => item.id === id);
    const hasSkills = item?.skills?.length > 0;
</script>

{#if item}
    {#if hasSkills}
        <div class="flex flex-wrap gap-2">
            {#each item.skills as skill}
                <Logo name={skill} link={true} />
            {/each}
        </div>
    {/if}

    <div class="prose max-w-none dark:prose-invert px-2">
        {#if item.content}
            <item.content />
        {/if}
    </div>

    <div class="w-40 h-40 animate-in slide-in-from-bottom debug"></div>
{:else}
    <Error />
{/if}