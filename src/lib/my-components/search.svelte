<script module lang="ts">
    import Fuse from 'fuse.js'

    export const filter = (q: string, data: Array<any>, sortByMatch: boolean) => {
        const regex = new RegExp("\\b(?:before:|after:|tech:)[\\w\\-/]*", "g");
        const input = q.replaceAll(regex, " ").replaceAll(/\s+/g, " ").trim();
        const before = q.match(/before:([\w\-\/]*)/)?.[1];
        const after = q.match(/after:([\w\-\/]*)/)?.[1];
        const tech = q.match(/tech:([\w\-\/]*)/)?.[1];
        if (before) {
            data = data.filter(item => {
                return item.date ? new Date(item.date) < new Date(before) : true;
            });
        }
        if (after) {
            data = data.filter(item => {
                return item.date ? new Date(item.date) > new Date(after) : true;
            });
        }
        if (tech) {
            data = data.filter(item => {
                return item.skills?.map((t: string) => t.toLowerCase()).includes(tech.toLowerCase());
            });
        }
        if (input === "") return data;
        const fuse = new Fuse(data, {
            keys: ['title', 'description'],
            threshold: 0.2,
            shouldSort: sortByMatch,
            findAllMatches: true,
            ignoreLocation: true,
        });
        return fuse.search(input).map(result => result.item);
    };
</script>


<script lang="ts">
    import Search from "@lucide/svelte/icons/search";
    import X from "@lucide/svelte/icons/x";
    import { getLocalTimeZone, today } from "@internationalized/date";
    import { Calendar } from "$lib/components/ui/calendar/index.js";
    import { fade } from 'svelte/transition';

    import Input, { clearInput, setCaretNext, getCurrentHighlight } from "$lib/my-components/Input.svelte";
    import { getSrc, getDescription } from "$lib/my-components/logo.svelte";
    import { Skills } from "$lib/data/types";

    let { 
        placeholder = "Search...",
        filters = null,
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let selected = $state(-1);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let input = $state<HTMLDivElement | null>(null);
    let showCalendar = $state(false);
    let showTech = $state(false);
    let showMenu = $derived(focused && q.length === 0);
    let calendarDate = $state(today(getLocalTimeZone()));

    const regex = new RegExp(`\\b(?:${filters.join("|")}):[\\w\\-/]*`, "g");
    let matchSkills = $state([...Skills]);

    const allMenuOpts = {
        before: { label: "before:", description: "Filter by date before (YYYY-MM-DD)" },
        after: { label: "after:", description: "Filter by date after (YYYY-MM-DD)" },
        tech: { label: "tech:", description: "Filter by technology (e.g., React, Svelte, Node.js)" }
    };

    const menuOpts: Array<{ label: string; description: string }> = [];
    for (const key in allMenuOpts) {
        if (filters.includes(key)) {
            menuOpts.push(allMenuOpts[key as keyof typeof allMenuOpts]);
        }
    }

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
            if (selected !== -1) {
                if (showMenu) onMenuClick(menuOpts[selected]);
                if (showTech) onSkillClick();
            } else {
                const offset = (showCalendar || showTech) ? 1 : 0;
                setCaretNext(input, offset);
            }
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (
                (showMenu && selected > 0) ||
                (showTech && selected > 0)
            ) {
                selected -= 1;
            }
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (
                (showMenu && selected < menuOpts.length - 1) ||
                (showTech && selected < matchSkills.length - 1 && selected < 10)
            ) {
                selected += 1;
            }
        }
    };


    const handleHighlight = (el: HTMLElement) => {
        const text = el.innerText;
        if (text.includes("before:")) {
            calendarDate = today(getLocalTimeZone());
            showCalendar = true;
        }
        if (text.includes("after:")) {
            calendarDate = today(getLocalTimeZone()).subtract({ years: 5 });
            showCalendar = true;
        }
        if (text.includes("tech:")) {
            showTech = true;
            const skill = text.split("tech:")[1].trim();
            matchSkills = skill.length > 0 
                ? Skills.filter(s => s.toLowerCase().includes(skill.toLowerCase())) 
                : [...Skills];
        }
    };


    const onMove = () => {
        showCalendar = false;
        showTech = false;
        selected = -1;
    };


    const setFilterValue = (value: string) => {
        const el = getCurrentHighlight();
        if (el === null) return;
        el.innerText = el.innerText.split(":")[0] + ":" + value + "\u00A0";
        onMove();
        if (input === null) return;
        setCaretNext(input, 1);
        forceUpdate();
    };


    const handleCalendar = () => {
        showCalendar = false;
        setFilterValue(calendarDate.toString());
    };


    const onMenuClick = (opt: typeof menuOpts[number]) => {
        if (input === null) return;
        selected = -1;
        input.innerText += (input.innerText.length > 0 ? " " : "") + opt.label;
        setCaretNext(input);
        forceUpdate();
    }


    const onSkillClick = () => {
        showTech = false;
        setFilterValue(matchSkills[selected].toLowerCase());
    }

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
    {#if showMenu && menuOpts.length > 0}
        <div 
            class="absolute rounded-md border bg-gradient-to-br from-card to-secondary z-50 top-12 w-full ring ring-primary overflow-hidden"
            in:fade={{ duration: 150 }}
        >
            {#each menuOpts as opt, index}
                <button
                    class="py-2 hover:bg-muted cursor-pointer px-4 w-full text-left"
                    class:bg-muted={selected === index}
                    onmouseenter={() => selected = index}
                    onmouseleave={() => selected = -1}
                    onmousedown={(e) => e.preventDefault()}
                    onclick={() => onMenuClick(opt)}
                >
                    <span class="font-medium rounded-sm bg-secondary px-1 border border-primary">{opt.label}</span>
                    <span class="text-base text-muted-foreground">{opt.description}</span>
                </button>
            {/each}
        </div>
    {/if}
    {#if showCalendar}
        <div 
            in:fade={{ duration: 150 }}
            class="absolute z-50 top-12"
        >
            <Calendar 
                type="single"
                bind:value={calendarDate} 
                buttonVariant="outline"
                onValueChange={handleCalendar}
                onmousedown={(e) => e.preventDefault()}
                class="rounded-md border bg-gradient-to-br from-card to-secondary ring ring-primary"
            />
        </div>
    {/if}
    {#if showTech}
        <div 
            class="absolute rounded-md border bg-gradient-to-br from-card to-secondary z-50 top-12 w-full ring ring-primary overflow-hidden"
            in:fade={{ duration: 150 }}
        >
            {#each matchSkills.slice(0, 11) as opt, index}
                <button
                    class="py-2 hover:bg-muted cursor-pointer px-4 w-full text-left flex items-center"
                    class:bg-muted={selected === index}
                    onmouseenter={() => selected = index}
                    onmouseleave={() => selected = -1}
                    onmousedown={(e) => e.preventDefault()}
                    onclick={onSkillClick}
                >
                    <img src={getSrc(opt)} alt={opt} width="20" height="20" />
                    <span class="ml-2">{getDescription(opt) || opt}:</span>
                    <span class="ml-2 text-muted-foreground">{opt.toLowerCase()}</span>
                </button>
            {/each}
            {#if matchSkills.length > 10}
                <span class="block text-center text-sm text-muted-foreground py-2">And {matchSkills.length - 10} more...</span>
            {/if}
        </div>
    {/if}
</div>
