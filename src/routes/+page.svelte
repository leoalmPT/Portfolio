<script lang="ts">
	import Logo from "$lib/my-components/logo.svelte";
    import info from "$lib/data/home.json";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>


<div class="lg:min-h-full flex flex-col lg:justify-between">
    <div></div>

    <div class="lg:grid lg:grid-cols-2 gap-2 px-2">
        <div class="flex flex-col justify-center text-center">
            <div class="text-4xl font-bold">I'm  <span class="text-primary">{info.name}</span></div>
            <div class="text-2xl font-bold">{info.role}</div>
            <div class="text-lg mt-2">{info.summary}</div>
        </div>

        <div class="flex flex-col items-center justify-center mt-10 lg:mt-0">
            <img src={info.image} alt={info.name} class="rounded-4xl w-[300px] object-cover border-8 border-primary shadow-xl"/>
            <div class="flex mt-4 gap-x-2">
                {#each Object.entries(info.socials) as [name, href]}
                    <Logo name={name} href={href} new_window size={3}/>
                {/each}
            </div>
        </div>
    </div>


    <div class="lg:grid lg:grid-cols-2 gap-2 lg:mt-20">

        <div class="mt-10 lg:mt-0">
            <div class="text-4xl font-bold text-primary text-center">
                Tech Stack
            </div>
            <Carousel.Root 
                class="max-w-2xl mx-auto"
                opts={{
                    loop: true,
                }}
            >
                <Carousel.Content>
                    {#each Object.entries(info.skills) as [name, technologies]}
                        <Carousel.Item>
                            <div class="text-3xl font-bold my-4 text-center">{name}</div>
                            <div 
                                class="flex flex-wrap gap-2 justify-center px-10 mx-auto"
                                class:max-w-xl={technologies.length === 9 || technologies.length === 10}
                            >
                                {#each technologies as technology}
                                    <Logo name={technology} size={4} href={`/projects?q=${technology}`} />
                                {/each}
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous class="top-[-16px] left-1/2 hover:!border-primary translate-x-[-150px]"/>
                <Carousel.Next class="top-[-16px] right-1/2 hover:!border-primary translate-x-[150px]" />
            </Carousel.Root>
        </div>

        <div class="mt-10 lg:mt-0">
            <div class="text-4xl font-bold text-primary text-center mb-2">
                Education
            </div>
            {#each info.education as { degree, area, institution, date }}
                <div class="my-2 text-center">
                    <div class="text-xl font-bold">
                        <span class="text-primary">{degree}</span> in {area}
                    </div>
                    <div class="text-lg">{institution} - {date}</div>
                </div>
            {/each}
        </div>
    </div>

    <div></div>
</div>

