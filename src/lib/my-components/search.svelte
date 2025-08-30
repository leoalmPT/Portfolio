<script module lang="ts">

    export const filter = (q: string, data: Array<any>, filters: { tech?: string, after?: string, before?: string }) => {
        const lowercasedGeneralQuery = q.toLowerCase();
        return data.filter((item: any) => {
            const matchesGeneral = lowercasedGeneralQuery
                ? item.title.toLowerCase().includes(lowercasedGeneralQuery) ||
                item.description.toLowerCase().includes(lowercasedGeneralQuery)
                : true;
            return matchesGeneral;
        });
    };
</script>


<script lang="ts">
    import Search from "@lucide/svelte/icons/search";
    import X from "@lucide/svelte/icons/x";

    import Input, { clearInput, getCaretPosition, setCaretNext } from "$lib/my-components/Input.svelte";
    import { getSrc, getDescription } from "$lib/my-components/logo.svelte";

    let { 
        placeholder = "Search...",
        filters = $bindable(null),
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let input = $state<HTMLDivElement | null>(null);
    const regex = new RegExp(`\\b(?:${filters ? Object.keys(filters).join("|") : ""}):\\w*`, "g");

    const highlightInput = (value: string) => {
        return value.replace(regex, (match: string) => `<span class="highlight-span cursor-pointer rounded-sm bg-secondary px-1 border border-primary">${match}</span>`);
    };

    const onInput = (value: string) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            query = value.replaceAll("\u00A0", " ").trim();
        }, 500);
    };

    const resetQuery = () => {
        if (input) clearInput(input);
        q = "";
        query = "";
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!input) return;
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            setCaretNext(input, getCaretPosition(input));
        }
    };

    const handleHighlight = (highlightEl: HTMLElement) => {
        console.log("Highlighted element:", highlightEl.innerText);
    };
</script>

<div class="w-full flex items-center relative max-w-3xl mx-auto">
    <Search class="absolute text-muted-foreground left-2"/>
    <Input 
        bind:ref={input}
        bind:value={q}
        bind:focused={focused}
        onInput={onInput}
        onKeyDown={handleKeyDown}
        onHighlight={filters !== null ? handleHighlight : null}
        highlightCallback={filters !== null ? highlightInput : null}
    />
    {#if q.length === 0}
        <span class="absolute text-muted-foreground pointer-events-none pl-11 pr-2 truncate w-full">{placeholder}</span>
    {:else}
        <X 
            class="absolute text-muted-foreground right-2 cursor-pointer hover:text-primary"
            onclick={resetQuery}
        />
    {/if}
</div>
