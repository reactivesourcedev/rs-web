<script>
    import { _ } from "$lib/services/i18n";
    import Alpina from '$lib/images/clients/AlpinaColor.png';
    import Capun from '$lib/images/clients/CapunColor.jpg';
    import Carrera from '$lib/images/clients/CarreraColor.jpg';
    import CicloCoppi from '$lib/images/clients/CicloCoppiColor.png';
    import EAE from '$lib/images/clients/EAEColor.png';
    import Faimedia from '$lib/images/clients/FaimediaColor.png';
    import LavaRopas from '$lib/images/clients/LavaRopasColor.png';
    
    import { onMount } from 'svelte';

    onMount(() => {
        globalThis.$(function () {
            globalThis.$('.owl-carousel').owlCarousel({
                loop: true,
                margin: 40,
                nav: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })

            globalThis.$('.owl-prev').css({"font-size": "50px", "margin-right": "10px", "color": "#80919f"})
            globalThis.$('.owl-next').css({"font-size": "50px", "margin-left": "10px", "color": "#80919f"})
        })
    });

</script>

<div class="container-fluid clients">
    <div class="container">
        <h6>Nuestros Clientes</h6>            
        <div class="owl-carousel">
            <div>
                <img
                    src={Alpina}
                    alt="Desarrollo de páginas webs y portales Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={Capun}
                    alt="Desarrollo de aplicaciones móviles Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={Carrera}
                    alt="Desarrollo de videojuegos, aplicaciones de realidad aumentada y contenido multimedia Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={CicloCoppi}
                    alt="Desarrollo de microservicios, despliegue de infraestructura y bases de datos Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={EAE}
                    alt="Desarrollo de microservicios, despliegue de infraestructura y bases de datos Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={Faimedia}
                    alt="Desarrollo de microservicios, despliegue de infraestructura y bases de datos Cali Colombia"
                />
            </div>
            <div>
                <img
                    src={LavaRopas}
                    alt="Desarrollo de microservicios, despliegue de infraestructura y bases de datos Cali Colombia"
                />
            </div>
        </div>        
    </div>
</div>

<style>
    .clients {
        text-align: center;
        background-color: #fff;
        padding-top: 0px;
        padding-bottom: 100px;
    }

    .clients h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 50px;
    }

</style>
