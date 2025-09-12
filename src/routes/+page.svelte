<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from 'embla-carousel-autoplay';
    import { TypeWriter } from 'svelte-typewrite'
    import { fly } from 'svelte/transition';

    import Logo from "$lib/my-components/logo.svelte";
    import { home } from "$lib/data/home";
</script>

<div class="xl:min-h-full xl:grid xl:grid-cols-8">

    <div class="col-span-3 xl:min-h-full flex flex-col items-center justify-center ">
        <div 
            class="aspect-square border-8 border-primary rounded-4xl overflow-hidden max-w-[300px] xl:max-w-[400px] mx-10 shadow-sm"
            in:fly|global={{ y: 100, duration: 500, delay: 0 }}
        >
            <img 
                src={home.image} 
                alt={home.name} 
                class="object-cover opacity-0 transition-opacity duration-700 ease-in-out w-full"
                onload={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
        </div>

        <div 
            class="flex flex-wrap my-4 gap-x-2 gap-y-4 justify-center"
            in:fly|global={{ y: 100, duration: 500, delay: 100 }}
        >
            {#each Object.entries(home.socials) as [name, href]}
                <Logo name={name} href={href} new_window size={3}/>
            {/each}
        </div>
    </div>

    <div class="col-span-5 xl:min-h-full flex flex-col justify-center p-2">

        <div 
            class="text-3xl sm:text-5xl font-bold" 
            in:fly|global={{ y: 100, duration: 500, delay: 200 }}
        >
            I'm  
            <span class="text-primary">
                <TypeWriter 
                    texts={[home.name]} 
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
            in:fly|global={{ y: 100, duration: 500, delay: 300 }}
        >
            {home.role}
        </div>
        <div 
            class="text-lg mt-4"
            in:fly|global={{ y: 100, duration: 500, delay: 400 }}
        >
            {home.summary}
        </div>

        <div
            in:fly|global={{ y: 100, duration: 500, delay: 500 }}
            class="relative mt-6"
        >
            <div class="absolute text-4xl font-bold text-primary ml-12">
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
                <Carousel.Content>
                    {#each Object.entries(home.skills) as [name, technologies]}
                        <Carousel.Item>
                            <div class="text-3xl font-bold mb-4 mt-12">{name}</div>
                            <div 
                                class="flex flex-wrap gap-2"
                            >
                                {#each technologies as technology}
                                    <Logo name={technology} size={4} link={true} />
                                {/each}
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous class="top-6 left-0 hover:!border-primary hover:cursor-pointer"/>
                <Carousel.Next class="top-6 left-0 hover:!border-primary translate-x-[280px] hover:cursor-pointer" />
            </Carousel.Root>
        </div>

    </div>

</div>
