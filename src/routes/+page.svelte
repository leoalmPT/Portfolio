<script lang="ts">
	import Logo from "$lib/my-components/logo.svelte";
    import info from "$lib/data/home.json";
</script>

<div class="pt-10 sm:pt-32"></div>

<div class="grid md:grid-cols-2 gap-2 px-2 gap-y-4">
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

<div class="pt-10 sm:pt-20"></div>

<div class="grid md:grid-cols-2 gap-2 px-2 gap-y-4">
    <div class="flex flex-col items-center justify-center ">
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

