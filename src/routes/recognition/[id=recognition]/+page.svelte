<script lang="ts">
    import Item from "$lib/my-components/item.svelte";
    import { awards } from "$lib/data/awards";
    import { certifications } from "$lib/data/certification";
</script>

<Item data={[...awards, ...certifications]} />