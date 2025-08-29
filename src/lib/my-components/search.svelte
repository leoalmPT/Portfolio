<script module lang="ts">

    export const filter = (q: string, data: Array<any>) => {
        let skillQuery = "";
        let generalQuery = q;

        const techMatch = q.match(/tech:([^\s]+)/);
        if (techMatch) {
            skillQuery = techMatch[1].toLowerCase();
            generalQuery = q.replace(techMatch[0], "").trim();
        }

        const lowercasedGeneralQuery = generalQuery.toLowerCase();

        return data.filter((item: any) => {
            const matchesSkill = skillQuery
                ? item.skills?.some?.((skill: string) => skill.toLowerCase().includes(skillQuery))
                : true; 

            const matchesGeneral = lowercasedGeneralQuery
                ? item.title.toLowerCase().includes(lowercasedGeneralQuery) ||
                item.description.toLowerCase().includes(lowercasedGeneralQuery) ||
                item.skills?.some?.((skill: string) => skill.toLowerCase().includes(lowercasedGeneralQuery))
                : true;

            return matchesSkill && matchesGeneral;
        });
    };
</script>


<script lang="ts">
    import Search from "@lucide/svelte/icons/search";
    import X from "@lucide/svelte/icons/x";
    import Input, { clearInput, getCaretPosition, setCaretNext } from "$lib/my-components/Input.svelte";

    let { 
        placeholder = "Search...",
        tech = false,
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let input = $state<HTMLDivElement | null>(null);

    const highlightInput = (value: string) => {
        return value.replace(/tech:\w*/g, (match: string) => `<span class="rounded-sm bg-secondary px-1 border border-primary">${match}</span>`);
    };

    const onInput = (value: string) => {
        q = value;
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
        if (e.key === "Enter") {
            console.log(q);
            e.preventDefault();
            setCaretNext(input, getCaretPosition(input));
        }
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
        highlightCallback={tech ? highlightInput : null}
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
