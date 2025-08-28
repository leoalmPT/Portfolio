<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';
    import { mode } from "mode-watcher";
    import { fade } from 'svelte/transition';

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

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });

    let showRobot = $state(false);
    function removeLogo() {
        const sv = document.querySelector("spline-viewer");
        const logo = sv?.shadowRoot?.querySelector("#logo");
        if (logo) logo.remove();
        else setTimeout(removeLogo, 100);
    }
    removeLogo();
    setTimeout(() => {
        showRobot = true;
    }, 500);
    window.addEventListener('beforeunload', () => {
        showRobot = false;
    });
</script>

<Particles
    id="tsparticles"
    options={particlesConfig}
/>
<div class="fixed z-[-2] h-full w-full bg-radial-[at_50%_90%] via-60% from-slate-50 via-cyan-50 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950"></div>


{#if showRobot}
    <div 
        class="fixed h-[500px] top-1/2 -translate-y-1/2 right-0 hidden robot"
        style="min-width: calc((100vw - 96rem)/2);"
        in:fade|global={{ duration: 500, delay: 0 }}
    >
        <spline-viewer 
            url="https://prod.spline.design/6qiEqJVGYD2RYTlD/scene.splinecode"
        ></spline-viewer>
    </div>
{/if}

<style>
    @media (min-width: 130rem) {
        .robot {
            display: block;
        }
    }
</style>