<script module lang="ts">

    export const filter = (q: string, data: Array<any>) => {
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
    import { getLocalTimeZone, today } from "@internationalized/date";
    import { Calendar } from "$lib/components/ui/calendar/index.js";

    import Input, { clearInput, setCaretNext, getCurrentHighlight } from "$lib/my-components/Input.svelte";
    import { getSrc, getDescription } from "$lib/my-components/logo.svelte";

    let { 
        placeholder = "Search...",
        filters = null,
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let input = $state<HTMLDivElement | null>(null);
    let showCalendar = $state(false);
    let showTech = $state(false);
    let calendarDate = $state(today(getLocalTimeZone()));
    const regex = new RegExp(`\\b(?:${filters.join("|")}):[\\w\\-/]*`, "g");

    const forceUpdate = () => {
        if (input) input.dispatchEvent(new Event("input", { bubbles: true }));
    }

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
            setCaretNext(input, 1);
        }
    };

    const handleHighlight = (el: HTMLElement) => {
        const text = el.innerText;
        if (text.includes("before:")) {
            showCalendar = true;
        }
    };

    const onMove = () => {
        showCalendar = false;
        showTech = false;
    };

    const setFilterValue = (el: HTMLElement, value: string) => {
        el.innerText = el.innerText.split(":")[0] + ":" + value + "\u00A0";
        onMove();
        if (input === null) return;
        setCaretNext(input, 1);
        forceUpdate();
    };

    const handleCalendar = () => {
        showCalendar = false;
        const el = getCurrentHighlight();
        if (el === null) return;
        setFilterValue(el, calendarDate.toString());
    };

    $effect(() => {
        calendarDate;
        handleCalendar();
    });
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
        onMove={onMove}
    />
    {#if q.length === 0}
        <span class="absolute text-muted-foreground pointer-events-none pl-11 pr-2 truncate w-full">{placeholder}</span>
    {:else}
        <X 
            class="absolute text-muted-foreground right-2 cursor-pointer hover:text-primary"
            onclick={resetQuery}
        />
    {/if}
    {#if showCalendar}
        <Calendar 
            type="single"
            bind:value={calendarDate} 
            buttonVariant="outline"
            class="absolute rounded-md border shadow-sm bg-gradient-to-br from-card to-secondary z-50 top-12"
        />
    {/if}
</div>
