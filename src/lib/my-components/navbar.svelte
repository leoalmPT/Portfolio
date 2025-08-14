<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import CodeXml from "@lucide/svelte/icons/code-xml";

    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";


    const record: {
        title: string;
        href: string;
        description: string;
    }[] = [
        {
            title: "Experience",
            href: "/experience",
            description: "Professional roles and internships where I applied and grew my skills."
        },
        {
            title: "Projects",
            href: "/projects",
            description: "A collection of personal and collaborative software projects."
        },
        {
            title: "Scientific Research",
            href: "/papers",
            description: "Published papers and academic contributions."
        },
        {
            title: "Recognition",
            href: "/recognition",
            description: "Awards and certifications that acknowledge my skills and contributions."
        }
    ];
</script>

<div class="w-full border-b-2 p-2">
    <div class="w-full container mx-auto">
        <NavigationMenu.Root>
            <NavigationMenu.List>

                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                            <a href="/" class={navigationMenuTriggerStyle()}>
                                <CodeXml/> <span class="ml-2">Leonard Almeida</span>
                            </a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                            <a href="/journey" class={navigationMenuTriggerStyle()}>Journey</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Track Record</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <ul
                        class="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                        >
                            {#each record as { title, href, description }}
                                <NavigationMenu.Link href={href}>
                                    <div class="font-medium">{title}</div>
                                    <div class="text-muted-foreground">
                                        {description}
                                    </div>
                                </NavigationMenu.Link>
                            {/each}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <Button onclick={toggleMode} variant="outline" size="icon">
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
        </NavigationMenu.Root>
    </div>
</div>