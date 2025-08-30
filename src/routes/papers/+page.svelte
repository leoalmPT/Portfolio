<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { papers } from "$lib/data/papers";
</script>

<Items
    data={papers}
    date
    name="Papers"
    placeholder="Search for titles, descriptions or dates..."
/>
