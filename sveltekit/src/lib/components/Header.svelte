<script>
    import { _ } from '$lib/services/i18n';
    export let language;

    let toLanguage = language == 'es' ? 'en' : 'es';

    import { onMount } from 'svelte';

    onMount(() => {
        const jq = window.$;

        jq(document).ready(function () {
        jq(".nav-link").click(function () {
            var sectionTo = jq(this).attr("href");
            jq("html, body").animate(
                {
                    scrollTop: jq(sectionTo).offset().top,
                },
                100
            );
        });

        jq(".navbar-toggler").click(function () {
            jq(".main-menu").toggleClass("active");
        });
        jq(".underline").click(function () {
            jq(".main-menu").removeClass("active");
            jq(".collapse").removeClass("show");
            jq(".main-menu").css("transition", "all .4s ease-in-out");
        });
    });
    });





</script>

<div class="main-menu container-fluid p-0">
    <nav class="navbar navbar-expand-lg p-0" id="top">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="navbar-brand"  href="/">reactive_source ><span class="cmd">_</span></a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="fas fa-bars grow" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link underline" href="#services">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline" href="#projects">Proyectos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline" href="#contact">Contacto</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link underline mayus" href="/{toLanguage}">{toLanguage}</a>
                </li> -->
            </ul>
        </div>
    </nav>
</div>

<style>
    /* .mayus {
        text-transform: uppercase;
    } */
</style>