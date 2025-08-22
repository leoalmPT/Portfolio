<script lang="ts">
    import { page } from '$app/state';
    import { fly } from 'svelte/transition';

    import Search, { filter } from "$lib/my-components/search.svelte";
    let query = $state(page.url.searchParams.get('q') || "");
    let first = $state(true);

</script>



<div 
    class="text-center text-5xl font-bold mb-6"
    in:fly|global={{ y: 100, duration: 500, delay: 0 }}
    onintrostart={() => {first = false}}
>
    Projects
</div>

<div in:fly|global={{ y: 100, duration: 500, delay: 100 }}>
    <Search 
        bind:query 
        placeholder="Search for titles, descriptions or even skills..."
    />
</div>