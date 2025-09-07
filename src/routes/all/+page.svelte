<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { experiences } from "$lib/data/experience";
    import { papers } from "$lib/data/papers";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";
    import { projects } from "$lib/data/projects";
</script>

<Items
    data={[...experiences, ...papers, ...awards, ...certifications, ...projects]}
    tech
    date
    switches
    shuffle
    name="Contents"
    placeholder="Search for titles, descriptions, dates or even technologies..."
/>
