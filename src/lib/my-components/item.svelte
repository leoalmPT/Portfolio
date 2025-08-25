<script lang="ts">
    import { page } from '$app/state';

    import { type Item as ItemType } from "$lib/data/types";
    import Error from '$lib/my-components/error.svelte';

    let {
        data
    } = $props<{ data: ItemType[] }>();

    const id = page.params.id;
    const item = data.find((item: ItemType) => item.id === id);
</script>

{#if item}
    {JSON.stringify(item)}
{:else}
    <Error />
{/if}