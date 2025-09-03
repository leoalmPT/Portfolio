<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import CodeXml from "@lucide/svelte/icons/code-xml";
    import Route from "@lucide/svelte/icons/route";
    import BadgeCheck from "@lucide/svelte/icons/badge-check";

    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";

    import { name } from "$lib/data/home.json";
    
    const record = [
        {
            "title": "Projects",
            "href": "/projects",
            "description": "A collection of personal and collaborative software projects."
        },
        {
            "title": "Scientific Research",
            "href": "/papers",
            "description": "Published papers and academic contributions."
        },
        {
            "title": "Experience",
            "href": "/experience",
            "description": "Professional roles and internships where I applied and grew my skills."
        },
        {
            "title": "Recognition",
            "href": "/recognition",
            "description": "Awards and certifications that acknowledge my skills and contributions."
        }
    ];

    let canChange = $state(true);
    let showClock = $state(false);

    const handleTheme = () => {
        if (!canChange) return;
        toggleMode();
        showClock = true;
        canChange = false;
        setTimeout(() => {
            showClock = false;
            toggleMode();
            canChange = true;
        }, 5000);
    }

</script>


{#if showClock}
    <div class="fixed z-50 flex h-full w-full items-center justify-center top-0 left-0">
        <dotlottie-wc
            src="https://lottie.host/c6e7a4a0-aaef-430b-a8b6-a6a8ff17b5be/CX7GKEk8LV.lottie"
            style="width: 500px;height: 500px"
            speed="1"
            autoplay
        ></dotlottie-wc>
    </div>
{/if}


<div class="w-full p-2 border-b-2 bg-background/50 backdrop-blur-md z-50">
    <div class="w-full container mx-auto">
        <NavigationMenu.Root class="w-full max-w-none" viewport={false}>
            <div class="w-full grid grid-cols-3">
            <NavigationMenu.List class="justify-self-start">
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="/" class={`${navigationMenuTriggerStyle()} !text-base bg-transparent`}>
                            <CodeXml/> <span class="md:ml-2 hidden md:inline">{name}</span>
                        </a>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.List class="justify-self-center">
            <NavigationMenu.Item>
                <NavigationMenu.Link>
                    {#snippet child()}
                        <a href="/journey" class={`${navigationMenuTriggerStyle()} !text-base bg-transparent`}>
                            <Route /> <span class="ml-2">Journey</span>
                        </a>
                    {/snippet}
                </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item class="relative">
                <NavigationMenu.Trigger class="bg-transparent text-base">
                    <BadgeCheck /> <span class="ml-2">Track Record</span>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content class="absolute w-auto left-auto right-0 md:left-[-60px] md:right-auto lg:left-[-240px] !bg-gradient-to-br from-card to-secondary">
                    <ul
                        class="grid gap-2 p-2 w-[250px] lg:w-[600px] lg:grid-cols-2"
                    >
                        {#each record as { title, href, description }}
                            <NavigationMenu.Link href={href}>
                                <div class="font-medium text-base">{title}</div>
                                <div class="text-muted-foreground">
                                    {description}
                                </div>
                            </NavigationMenu.Link>
                        {/each}
                    </ul>
                    <div class="p-2 pt-0 flex justify-center">
                        <Button variant="outline" href="/all" class="!text-base hover:!border-primary w-full">
                            View All
                        </Button>
                    </div>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.List class="ml-auto justify-self-end">
            <NavigationMenu.Item>
                <Button onclick={handleTheme} variant="outline" size="icon" class="bg-transparent p-0 hover:!border-primary hover:cursor-pointer">
                    <SunIcon
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <MoonIcon
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </NavigationMenu.Item>
            </NavigationMenu.List>

        </div>
    </NavigationMenu.Root>
</div>
</div>