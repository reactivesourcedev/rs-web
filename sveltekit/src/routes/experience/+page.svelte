<script>
    import { _ } from "$lib/services/i18n";
    import Cloud from '$lib/images/experience/experiencia-computacion-nube-reactive-source.jpg';
    import Agile from '$lib/images/experience/experiencia-desarrollo-agil-reactive-source.jpg';
    import FullStack from '$lib/images/experience/experiencia-desarrollo-full-stack-reactive-source.jpg';

    import Quote from "$lib/components/Quote.svelte";

</script>

<svelte:head>
	<title>Experiencia • Reactive Source • Desarrollo de Aplicaciones Móviles, Web Apps, Android, iOS, Programas, Software a la Medida en Cali, Colombia</title>
	<meta name="description" content="Tenemos experiencia en el uso de servicios como Google Cloud, AWS y Firebase. Para despliegue de aplicaciones completas o microservicios. Planificamos todo el desarrollo del software con metodologias que se adaptan a las necesidades y tiempos del cliente. Implementamos los aplicativos de inicio a fin. Bases de datos, logica de negocio, interfaz gráfica y despliegue en producción." />
</svelte:head>

<div class="container-fluid expertise img-fluid" id="expertise">
    <div class="container">
        <h1>Habilidades y Experiencia</h1>
        <div class="row">
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-top">
                    <img
                        src={Cloud}
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

<Quote language="{'es'}"/>

<style>
    .expertise {
        display: flex;
        text-align: center;
        background-color: #121212;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .expertise .card-top {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-bottom: 50px;
    }

    .expertise .card-bottom {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-top: 50px;
    }

    .expertise .card-top img {
        border: none;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
    }

    .expertise .card-bottom img {
        border: none;
        border-bottom-left-radius: 45px;
        border-bottom-right-radius: 45px;
    }

    .expertise h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.3em;
        /*color: #00233f;*/
        margin-bottom: 50px;
    }

    .expertise h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 30px;
    }

    .expertise p {
        font-size: 21px;
        font-weight: 400;
        color: #00233f;
    }
</style>
