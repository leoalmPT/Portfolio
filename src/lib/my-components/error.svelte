<script lang="ts">
    import CircleX from "@lucide/svelte/icons/circle-x";
    import { fly } from 'svelte/transition';
</script>

<div class="grow flex flex-col items-center justify-center">
    <div in:fly|global={{ y: 100, duration: 500, delay: 0 }}>
        <CircleX size={100} class="mx-auto" />
        <div class=" text-3xl mt-2">Page not found</div>
    </div>
</div>