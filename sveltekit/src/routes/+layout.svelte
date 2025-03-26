<script>
	let { children } = $props();

	import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ScrollToTopButton from "$lib/components/ScrollToTopButton.svelte";

    let language = 'es';
</script>

<Header language="{language}"/>

{@render children()}

<Footer language="{language}" />
<ScrollToTopButton />