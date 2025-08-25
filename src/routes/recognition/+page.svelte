<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";
</script>

<Items
    data={[...awards, ...certifications]}
    tech={false}
    name="Recognition"
    placeholder="Search for titles or descriptions..."
/>
