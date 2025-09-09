<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';
    import { mode } from "mode-watcher";

    let theme = $derived(mode.current ?? 'light');
    const colors = {
        dark: {
            color: "#0284c7",
            link: "#0284c7",
        },
        light: {
            color: "#0284c7",
            link: "#0284c7",
        }
    }

    let particlesConfig = $derived({
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            color: {
                value: colors[theme].color
            },
            links: {
                enable: true,
                color: colors[theme].link
            },
            move: {
                enable: true
            },
            number: {
                value: 100
            }
        }
    });

    const initialWidth =  typeof window !== 'undefined' ? window.innerWidth : 0;
    if (initialWidth >= 640) {
        void particlesInit(async (engine) => {
            await loadSlim(engine);
        });
    }
</script>

{#if initialWidth >= 640}
    <Particles
        id="tsparticles"
        options={particlesConfig}
    />
{/if}
<div class="fixed z-[-2] h-full w-full bg-radial-[at_50%_90%] via-60% from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"></div>
