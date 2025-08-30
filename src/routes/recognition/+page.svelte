<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";
</script>

<Items
    data={[...awards, ...certifications]}
    date
    name="Recognition"
    placeholder="Search for titles, descriptions or dates..."
/>
