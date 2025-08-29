<script module lang="ts">

    export const getCaretPosition = (el: HTMLDivElement) => {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return 0;
        const range = sel.getRangeAt(0);
        const preRange = range.cloneRange();
        preRange.selectNodeContents(el);
        preRange.setEnd(range.endContainer, range.endOffset);
        return preRange.toString().length;
    };


    export const setCaretPosition = (el: HTMLDivElement, chars: number) => {
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


    export const setCaretNext = (el: HTMLDivElement, chars: number) => {
        const text = el.innerText;
        const char = text[chars];
        let pos = chars;
        while (pos < text.length) {
            if ((char === "\u00A0" && text[pos] !== "\u00A0") || (char !== "\u00A0" && text[pos] === "\u00A0")) {
                break;
            }
            pos++;
        }
        setCaretPosition(el, pos);
    };


    export const clearInput = (el: HTMLDivElement) => {
        if (!el) return;
        el.innerHTML = "";
        setCaretPosition(el, 0);
    };
    
</script>

<script lang="ts">

    let {
        ref = $bindable(null),
        value = $bindable(""),
        focused = $bindable(false),
        highlightCallback = null,
        onInput = null,
        onKeyDown = null,
    } = $props();

    const handleCopy = (e: ClipboardEvent) => {
        if (!ref) return;
        e.preventDefault();
        e.clipboardData?.setData("text/plain", value);
    };

    const updateInnerHtml = () => {
        if (!ref) return;
        const pos = getCaretPosition(ref);
        ref.innerHTML = highlightCallback ? highlightCallback(value) : value;
        if (ref.innerHTML !== "") {
            ref.innerHTML = `<span>${ref.innerHTML}</span>`;
        }
        setCaretPosition(ref, pos);
    };

    const handleInput = (e: Event) => {
        if (!ref) return;
        value = (e.target as HTMLDivElement).innerText.replace(/\n/g, "").replaceAll(" ", "\u00A0");
        updateInnerHtml?.();
        onInput?.(value);
    };

</script>

<div 
    bind:this={ref}
    contenteditable
    role="textbox"
    tabindex="0"
    oninput={handleInput}
    onfocus={() => focused = true}
    onblur={() => focused = false}
    oncopy={handleCopy}
    onkeydown={onKeyDown}
    class="text-base px-10 focus:ring-primary focus:ring-3 bg-gradient-to-br from-card to-secondary w-full border border-input py-1 rounded-md h-9 flex items-center outline-none"
></div>