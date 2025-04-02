<script>
	import Banner from "$lib/components/Banner.svelte";
	import Services from "$lib/components/Services.svelte";
	import SoftwareDesign from "$lib/components/SoftwareDesign.svelte";
	import Quote from "$lib/components/Quote.svelte";
	import Experience from "$lib/components/Experience.svelte";
	import Projects from "$lib/components/Projects.svelte";
    import Clients from "$lib/components/Clients.svelte";
	import Contact from "$lib/components/Contact.svelte";
    
	import { setupI18n } from '$lib/services/i18n';

	export let id;
    let language;

    import { onMount } from 'svelte';

    onMount(() => {
        
        let userLang = id ?? (navigator.language); 
        console.log(`ID: ${id}`);
        console.log(`LANG: ${(navigator.language)}`);
        console.log(`LANG2: ${userLang == 'es' ? 'es'  :'en'}`);
        language = userLang.includes('es') ? 'es'  :'en';
        //setupI18n({ withLocale: 'language'});
        setupI18n({ withLocale: 'notdefined'});
    });
</script>

<svelte:head>
	<title>Reactive Source • Desarrollo de Aplicaciones Móviles, Web Apps, Android, iOS, Programas, Software a la Medida en Cali, Colombia</title>
	<meta name="description" content="Casa de Software en Cali, Colombia, aplicaciones móviles, web y de escritorio. Construimos y desplegamos software y programas informáticos en diferentes plataformas tecnológicas y sistemas operativos, windows. Estamos ubicados en Cali, Colombia." />
</svelte:head>


<Banner />
<SoftwareDesign />
<Services />
<Projects />
<Clients />
<!-- <Quote language="{language}"/> -->
<Experience />
<Contact />


<style>

</style>

