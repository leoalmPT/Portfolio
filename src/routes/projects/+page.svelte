<script lang="ts">
    import Items from "$lib/my-components/items.svelte";
    import { projects } from "$lib/data/projects";
</script>

<Items
    data={projects}
    tech
    name="Projects"
    shuffle
    placeholder="Search for titles, descriptions or even technologies..."
/>
