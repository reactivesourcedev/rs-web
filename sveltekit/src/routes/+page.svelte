<script>
	import Banner from "./Banner.svelte";
	import Contact from "./Contact.svelte";
	import Footer from "./Footer.svelte";

	import Header from "./Header.svelte";
	import Expertise from "./expertise.svelte";
	import Quote from "./Quote.svelte";
	import ScrollToTopButton from "./ScrollToTopButton.svelte";
	import Services from "./Services.svelte";
	import SoftwareDesign from "./SoftwareDesign.svelte";
    
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
	<title>Reactive Source | Desarrollo de Software, Web y Aplicaciones Apps en Cali, Colombia</title>
	<meta name="description" content="Desarrollo Personalizado y Multiplataforma, Desarrollamos aplicaciones web, móviles y de escritorio. Construimos y desplegamos software en diferentes plataformas tecnológicas y sistemas operativos. Estamos ubicados en Cali, Colombia." />
</svelte:head>

<Header language="{language}"/>

<Banner />

<SoftwareDesign />

<Services />

<Quote language="{language}"/>

<Expertise />

<Contact />

<Footer language="{language}" />

<ScrollToTopButton />

<style>

</style>

