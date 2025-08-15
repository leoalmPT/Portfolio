<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';
    import { mode } from "mode-watcher";

    let theme = $derived(mode.current ?? 'light');
    const colors = {
        dark: {
            color: "#60a5fa",
            link: "#60a5fa",
        },
        light: {
            color: "#60a5fa",
            link: "#60a5fa",
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

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });
</script>

<Particles
    id="tsparticles"
    options={particlesConfig}
/>
<div class="absolute z-[-2] h-full w-full bg-radial-[at_50%_70%] from-blue-50 via-blue-100 via-90% to-blue-200 dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950"></div>