<script lang="ts">
    import Item from "$lib/my-components/item.svelte";
    import { projects } from "$lib/data/projects";
</script>

<Item data={projects} />