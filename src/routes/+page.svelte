<script lang="ts">
	import Logo from "$lib/my-components/logo.svelte";
    import info from "$lib/data/home.json";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<div class="grid md:grid-cols-2 gap-2 px-2 gap-y-4 mt-16">
    <div class="flex flex-col justify-center">
        <div class="text-4xl font-bold">I'm  <span class="text-primary">{info.name}</span></div>
        <div class="text-2xl">{info.role}</div>
        <div class="text-lg mt-2">{info.summary}</div>
    </div>

    <div class="flex flex-col items-center justify-center ">
        <img src={info.image} alt={info.name} class="rounded-4xl w-60 h-60 object-cover border-8 border-primary shadow-xl"/>
        <div class="flex mt-2 gap-x-2">
            {#each Object.entries(info.socials) as [name, href]}
                <Logo name={name} href={href} new_window size={3}/>
            {/each}
        </div>
    </div>
</div>

<div class="mt-12">
    <div class="text-3xl font-bold text-primary text-center">
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
                    <div class="flex flex-wrap gap-2 justify-center px-10">
                        {#each technologies as technology}
                            <Logo name={technology} size={4} href={`/projects?technology=${technology}`} />
                        {/each}
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
        <Carousel.Previous class="top-[100px] left-0"/>
        <Carousel.Next class="top-[100px] right-0" />
    </Carousel.Root>
</div>

<div class="grid md:grid-cols-2 gap-2 gap-y-4">
    <div class="flex flex-col items-center justify-center">
        <img src="/education.svg" alt="education" class="h-[500px] object-cover"/>
    </div>

    <div class="flex flex-col justify-center">
        {#each info.education as { degree, area, institution, date }}
            <div class="my-2">
                <div class="text-xl font-bold">
                    <span class="text-primary">{degree}</span> in {area}
                </div>
                <div class="text-lg">{institution} - {date}</div>
            </div>
        {/each}
    </div>
</div>

