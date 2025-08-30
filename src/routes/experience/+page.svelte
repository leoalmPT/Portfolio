<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { experiences } from "$lib/data/experience";
</script>

<Items
    data={experiences}
    tech
    date
    name="Experience"
    placeholder="Search for titles, descriptions or even technologies..."
/>
