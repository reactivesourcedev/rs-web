<script>
    import { _ } from "$lib/services/i18n";
    import Website from '$lib/images/services/servicio-desarrollo-sitios-páginas-web-websites-reactive-source.png';
    import Apps from '$lib/images/services/servicio-desarrollo-aplicacion-móvil-app-reactive-source.png';
    import Multimedia from '$lib/images/services/servicio-desarrollo-contenido-multimedia-reactive-source.png';
    import Modular from '$lib/images/services/servicio-desarrollo-modular-reactive-source.png';

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
                navText: ['<i class="fas fa-chevron-left" style="color: #fff"></i>', 
                          '<i class="fas fa-chevron-right" style="color: #fff"></i>']
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
                    <div class="service-item">
                        <img
                            src={Website}
                            title="servicio desarrollo sitios páginas web websites reactive source"
                            alt="servicio desarrollo sitios páginas web websites reactive source"
                        />
                        <h1>Websites</h1>
                        <p>
                            Desde una página web informativa hasta un portal web robusto especializado. Contamos con el personal experto para  diseñar y desarrollar todo tipo de aplicativos web con las tecnologías más recientes, ofreciendo aspectos visuales modernos y adaptativos a cualquier tipo de dispositivo.
                        </p>
                    </div>
                    <div class="service-item">
                        <img
                            src={Apps}
                            title="servicio desarrollo aplicacion móvil app reactive source"
                            alt="servicio desarrollo aplicacion móvil app reactive source"
                        />
                        <h1>Apps</h1>
                        <p>
                            Ofrecemos servicios de desarrollo para entornos móviles, entornos web y de escritorio, brindando soluciones basadas en tecnologías nativas e híbridas, lo que nos permite satisfacer las necesidades del cliente y del mercado con aplicaciones de alta calidad y escalabilidad.
                        </p>
                    </div>
                    <div class="service-item">
                        <img
                            src={Multimedia}
                            title="servicio desarrollo contenido multimedia reactive source"
                            alt="servicio desarrollo contenido multimedia reactive source"
                        />
                        <h1>Contenido Multimedia</h1>
                        <p>
                            Contamos con un equipo experto para desarrollar todas aquellas ideas creativas y proyectos multimedia, que generen impacto y brindan experiencias únicas. Contamos con el conocimiento necesario para desarrollar videojuegos, apps AR, diseño, animación y modelado 2D/3D, recorridos virtuales programables y soluciones funcionales para audio y sonido.
                        </p>
                    </div>
                    <div class="service-item">
                        <img
                            src={Modular}
                            title="servicio desarrollo modular reactive source"
                            alt="servicio desarrollo modular reactive source"
                        />
                        <h1>Desarrollo Modular</h1>
                        <p>
                            Los microservicios, servicios de computación en la nube, diseño y despliegue de estructura aislada de bases de datos, alojamientos web y de aplicaciones, son un conjunto más de soluciones modulares que ponemos a disposición de nuestros clientes, para atender las diferentes necesidades en integración de software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .services {
        text-align: center;
        background-color: #121212;
        padding-top: 150px;
        padding-bottom: 150px;
    }

    .services h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.3em;
        margin-bottom: 15px;
    }

    .services h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        margin-bottom: 30px;
    }

    .services p {
        font-size: 21px;
        font-weight: 400;
    }

    .services .desc {
        margin-bottom: 25px;
    }

    .services img {
        width: 40vh !important;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
    }

    .services a {
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease; 
    }

    .services a, .services a:hover {
        text-decoration: none !important; 
    }
</style>
