<script>
	import Banner from "$lib/components/Banner.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Footer from "$lib/components/Footer.svelte";

	import Header from "$lib/components/Header.svelte";
	import Experience from "$lib/components/Experience.svelte";
	import LatestWork from "$lib/components/LatestWork.svelte";
	import Quote from "$lib/components/Quote.svelte";
	import ScrollToTopButton from "$lib/components/ScrollToTopButton.svelte";
	import Services from "$lib/components/Services.svelte";
	import SoftwareDesign from "$lib/components/SoftwareDesign.svelte";
    
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
	<title>Reactive Source • Desarrollo de Software, Web y Aplicaciones Apps en Cali, Colombia</title>
	<meta name="description" content="Desarrollo Personalizado y Multiplataforma, Desarrollamos aplicaciones web, móviles y de escritorio. Construimos y desplegamos software en diferentes plataformas tecnológicas y sistemas operativos. Estamos ubicados en Cali, Colombia." />
</svelte:head>

<Header language="{language}"/>
<Banner />
<SoftwareDesign />
<Services />
<!-- <Quote language="{language}"/> -->
<Experience />
<LatestWork />
<Contact />
<Footer language="{language}" />
<ScrollToTopButton />

<style>

</style>

