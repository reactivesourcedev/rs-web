<script>
    import { _ } from "$lib/services/i18n";
    import Architecture from '$lib/images/freekpik-fullvector-architecture.jpg';
    import Agile from '$lib/images/freekpik-fullvector-agile.jpg';
    import FullStack from '$lib/images/freekpik-fullvector-full-stack.jpg';

</script>

<svelte:head>
	<title>Experiencia • Reactive Source • Desarrollo de Software, Web y Aplicaciones Apps en Cali, Colombia</title>
	<meta name="description" content="Tenemos experiencia en el uso de servicios como Google Cloud, AWS y Firebase. Para despliegue de aplicaciones completas o microservicios. Planificamos todo el desarrollo del software con metodologias que se adaptan a las necesidades y tiempos del cliente. Implementamos los aplicativos de inicio a fin. Bases de datos, logica de negocio, interfaz gráfica y despliegue en producción." />
</svelte:head>

<div class="container-fluid expertise img-fluid" id="expertise">
    <div class="container">
        <h1>Habilidades y Experiencia</h1>
        <div class="row">
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-top">
                    <img
                        src={Architecture}
                        class="card-img-top"
                        alt="Servicios de Computación en la nube"
                    />
                    <div class="card-body">
                        <h6 class="card-title">
                            Computación<br />
                            en la nube
                        </h6>
                        <p class="card-text">
                            Tenemos experiencia en el uso de servicios como Google Cloud, AWS y Firebase. Para despliegue de aplicaciones completas o microservicios.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">
                    <div class="card-body">
                        <h6 class="card-title">
                            Desarrollo<br />
                            Ágil
                        </h6>
                        <p class="card-text">
                            Planificamos todo el desarrollo del software con metodologias que se adaptan a las necesidades y tiempos del cliente.
                        </p>
                    </div>
                    <img
                        src={Agile}
                        class="card-img-bottom"
                        alt="Desarrollo ágil y seguro"
                    />
                </div>
            </div>
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-top">
                    <img
                        src={FullStack}
                        class="card-img-top"
                        alt="Desarrollo full-stack"
                    />
                    <div class="card-body">
                        <h6 class="card-title">
                            Desarrollo<br />
                            Full-Stack
                        </h6>
                        <p class="card-text">
                            Implementamos los aplicativos de inicio a fin. Bases de datos, logica de negocio, interfaz gráfica y despliegue en producción.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
