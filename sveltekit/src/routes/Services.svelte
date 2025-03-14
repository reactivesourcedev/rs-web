<script>
    import { _ } from "$lib/services/i18n";
    import Web from '$lib/images/freepik-pikisuperstar-web.png';
    import Mobile from '$lib/images/freepik-upklyak-mobile.png';
    import AugmentedReality from '$lib/images/freepik-pikisuperstar-ar.png';
    import Modules from '$lib/images/freepik-fullvector-modules.png';

    import { onMount } from 'svelte';

    onMount(() => {
        globalThis.$(function () {
            globalThis.$('.owl-1').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                smartSpeed: 1000,
                autoplay: true,
                autoplayHoverPause: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
            })
        })
    });

</script>

<div class="container-fluid services" id="services">
    <div class="container">
        <div class="desc animation-element slide-bottom">
            <h1>Nuestros Servicios</h1>
            <h6>Desarrollo Personalizado y Multiplataforma</h6>
            <p>
                Desarrollamos aplicaciones web, móviles y de escritorio. Construimos y desplegamos software en diferentes plataformas y sistemas operativos, sacando el mayor provecho de las diferentes tecnologías para construir productos que se adapten a su necesidad. Estamos ubicados en Cali, Colombia.
            </p>
        </div>

        <div class="content">
            <div class="container">
                <div class="owl-carousel owl-1">
                    <blockquote class="service-item">
                        <img
                            src={Web}
                            alt="Desarrollo de páginas webs y portales Cali Colombia"
                        />
                        <h1>Websites</h1>
                        <p>
                            Desde una página web informativa hasta un portal web robusto especializado. Contamos con el personal experto para  diseñar y desarrollar todo tipo de aplicativos web con las tecnologías más recientes, ofreciendo aspectos visuales modernos y adaptativos a cualquier tipo de dispositivo.
                        </p>
                    </blockquote>
                    <blockquote class="service-item">
                        <img
                            src={Mobile}
                            alt="Desarrollo de aplicaciones móviles Cali Colombia"
                        />
                        <h1>Apps</h1>
                        <p>
                            Ofrecemos servicios de desarrollo para entornos móviles, entornos web y de escritorio, brindando soluciones basadas en tecnologías nativas e híbridas, lo que nos permite satisfacer las necesidades del cliente y del mercado con aplicaciones de alta calidad y escalabilidad.
                        </p>
                    </blockquote>
                    <blockquote class="service-item">
                        <img
                            src={AugmentedReality}
                            alt="Desarrollo de videojuegos, aplicaciones de realidad aumentada y contenido multimedia Cali Colombia"
                        />
                        <h1>Contenido Multimedia</h1>
                        <p>
                            Contamos con un equipo experto para desarrollar todas aquellas ideas creativas y proyectos multimedia, que generen impacto y brindan experiencias únicas. Contamos con el conocimiento necesario para desarrollar videojuegos, apps AR, diseño, animación y modelado 2D/3D, recorridos virtuales programables y soluciones funcionales para audio y sonido.
                        </p>
                    </blockquote>
                    <blockquote class="service-item">
                        <img
                            src={Modules}
                            alt="Desarrollo de microservicios, despliegue de infraestructura y bases de datos Cali Colombia"
                        />
                        <h1>Desarrollo Modular</h1>
                        <p>
                            Los microservicios, servicios de computación en la nube, diseño y despliegue de estructura aislada de bases de datos, alojamientos web y de aplicaciones, son un conjunto más de soluciones modulares que ponemos a disposición de nuestros clientes, para atender las diferentes necesidades en integración de software.
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
