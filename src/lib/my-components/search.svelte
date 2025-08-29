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

    const getCaretPosition = (el: HTMLDivElement) => {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return 0;
        const range = sel.getRangeAt(0);
        const preRange = range.cloneRange();
        preRange.selectNodeContents(el);
        preRange.setEnd(range.endContainer, range.endOffset);
        return preRange.toString().length;
    };

    const setCaretPosition = (el: HTMLDivElement, chars: number) => {
        const sel = window.getSelection();
        if (!sel) return;
        let node: ChildNode | null = el;
        let remaining = chars;
        const traverse = (n: ChildNode): boolean => {
            if (n.nodeType === Node.TEXT_NODE) {
                if ((n.textContent?.length ?? 0) >= remaining) {
                    const range = document.createRange();
                    range.setStart(n, remaining);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    return true;
                } else {
                    remaining -= n.textContent?.length ?? 0;
                }
            } else {
                for (let child of n.childNodes) {
                    if (traverse(child)) return true;
                }
            }
            return false;
        };
        traverse(node);
    };
</script>


<script lang="ts">
    import Search from "@lucide/svelte/icons/search";
    import X from "@lucide/svelte/icons/x";

    let { 
        placeholder = "Search...",
        tech = false,
        query = $bindable() 
    } = $props();

    let q = $state(query);
    let focused = $state(false);
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let input = $state<HTMLDivElement | null>(null);

    const highlightInput = () => {
        return q.replace(/tech:\w*/g, (match: string) => `<span class="rounded-sm bg-secondary px-1 border border-primary">${match}</span>`);
    };

    const updateInnerHtml = () => {
        if (!input) return;
        const pos = getCaretPosition(input);
        input.innerHTML = highlightInput();
        if (input.innerHTML !== "") {
            input.innerHTML = `<span>${input.innerHTML}</span>`;
        }
        setCaretPosition(input, pos);
    };

    const updateQuery = (e: Event) => {
        q = (e.target as HTMLDivElement).innerText.replace(/\n/g, "");
        console.log(q);
        if (tech) updateInnerHtml();
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            query = q.trim();
        }, 500);
    };

    const resetQuery = () => {
        if (input) input.innerHTML = "";
        q = "";
        query = "";
    };

    const handleCopy = (e: ClipboardEvent) => {
        if (!input) return;
        e.preventDefault();
        e.clipboardData?.setData("text/plain", q);
    };
</script>

<div class="w-full flex items-center relative max-w-3xl mx-auto">
    <Search class="absolute text-muted-foreground left-2"/>
    <div 
        bind:this={input}
        contenteditable
        role="textbox"
        tabindex="0"
        oninput={updateQuery}
        onfocus={() => focused = true}
        onblur={() => focused = false}
        oncopy={handleCopy}
        class="text-base px-10 focus:ring-primary focus:ring-3 bg-gradient-to-br from-card to-secondary w-full border border-input py-1 rounded-md h-9 flex items-center outline-none"
    >
    </div>
    {#if q.length === 0}
        <span class="absolute text-muted-foreground pointer-events-none pl-11 pr-2 truncate w-full">{placeholder}</span>
    {:else}
        <X 
            class="absolute text-muted-foreground right-2 cursor-pointer hover:text-primary"
            onclick={resetQuery}
        />
    {/if}
</div>
