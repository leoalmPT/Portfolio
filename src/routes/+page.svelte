<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from 'embla-carousel-autoplay';
    import { TypeWriter } from 'svelte-typewrite'
    import { fly } from 'svelte/transition';
    import { Button } from "$lib/components/ui/button/index.js";

    import Logo from "$lib/my-components/logo.svelte";
    import info from "$lib/data/home.json";
</script>

<div class="lg:min-h-full lg:grid lg:grid-cols-8">

    <div class="col-span-3 min-h-full flex items-center justify-center p-10">
        <img 
            src={info.image} 
            alt={info.name} 
            class="object-cover border-8 border-primary rounded-4xl w-[400px] lg:w-full"
            in:fly|global={{ y: 100, duration: 500, delay: 0 }}
        />
    </div>

    <div class="col-span-5 min-h-full flex flex-col justify-center p-2">

        <div 
            class="text-5xl font-bold" 
            in:fly|global={{ y: 100, duration: 500, delay: 100 }}
        >
            I'm  
            <span class="text-primary">
                <TypeWriter 
                    texts={[info.name]} 
                    repeat={3}
                    endState={{
                        text: 'typed',
                        caret: 'hidden'
                    }}
                    typeSpeed={70}
                    deleteSpeed={50}
                    blinkDuration={700}
                    afterTyped={{
                        blink: 5
                    }}
                    afterDeleted={{
                        blink: 1
                    }}
                />
            </span>
        </div>
        
        <div 
            class="text-3xl font-bold mt-4"
            in:fly|global={{ y: 100, duration: 500, delay: 200 }}
        >
            {info.role}
        </div>
        <div 
            class="text-lg mt-4"
            in:fly|global={{ y: 100, duration: 500, delay: 300 }}
        >
            {info.summary}
        </div>

        <div 
            class="flex flex-wrap mt-4 gap-x-2 gap-y-4"
            in:fly|global={{ y: 100, duration: 500, delay: 400 }}
        >
            {#each Object.entries(info.socials) as [name, href]}
                <Logo name={name} href={href} new_window size={3}/>
            {/each}
            <Button 
                variant="outline" 
                class="lg:ml-4 text-lg h-full hover:scale-105 transition-transform duration-150 ease-in-out border-2 hover:!border-primary" 
                href="/journey"
            > 
                Find out more!
            </Button>
        </div>

        <div
            in:fly|global={{ y: 100, duration: 500, delay: 500 }}
            class="relative"
        >
            <div class="absolute text-4xl font-bold text-primary mt-10 ml-12">
                Tech Stack
            </div>
            <Carousel.Root 
                class="w-full"
                opts={{
                    loop: true,
                }}
                plugins={[Autoplay({ 
                    playOnInit: true, 
                    delay: 5000, 
                    stopOnMouseEnter: true, 
                    stopOnInteraction: false 
                })]}
            >
                <Carousel.Content class="p-1">
                    {#each Object.entries(info.skills) as [name, technologies]}
                        <Carousel.Item>
                            <div class="text-3xl font-bold mb-4 mt-[100px]">{name}</div>
                            <div 
                                class="flex flex-wrap gap-2"
                            >
                                {#each technologies as technology}
                                    <Logo name={technology} size={4} href={`/projects?q=${technology}`} />
                                {/each}
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous class="top-[60px] left-0 hover:!border-primary"/>
                <Carousel.Next class="top-[60px] left-0 hover:!border-primary translate-x-[280px]" />
            </Carousel.Root>
        </div>

    </div>

</div>
