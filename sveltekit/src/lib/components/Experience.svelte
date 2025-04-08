<script>
    import { _ } from "$lib/services/i18n";
    import Cloud from '$lib/images/experience/experiencia-computacion-nube-reactive-source.webp';
    import Agile from '$lib/images/experience/experiencia-desarrollo-agil-reactive-source.webp';
    import FullStack from '$lib/images/experience/experiencia-desarrollo-full-stack-reactive-source.webp';

</script>

<div class="container-fluid experience img-fluid" id="experience">
    <div class="container">
        <h1 class="animation-element slide-left">Habilidades y Experiencia</h1>
        <div class="row">
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-top">
                    <img
                        src={Cloud}
                        class="card-img-top"
                        title="experiencia computacion nube reactive source"
                        alt="experiencia computacion nube reactive source"
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
                        title="experiencia desarrollo agil reactive source"
                        alt="experiencia desarrollo agil reactive source"
                    />
                </div>
            </div>
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-top">
                    <img
                        src={FullStack}
                        class="card-img-top"
                        title="experiencia desarrollo full stack reactive source"
                        alt="experiencia desarrollo full stack reactive source"
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
    .experience {
        display: flex;
        text-align: center;
        background-color: #fff;
        padding-top: 150px;
        padding-bottom: 150px;
    }

    .experience .card-top {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-bottom: 50px;
    }

    .experience .card-bottom {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-top: 50px;
    }

    .experience .card-top img {
        border: none;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
    }

    .experience .card-bottom img {
        border: none;
        border-bottom-left-radius: 45px;
        border-bottom-right-radius: 45px;
    }

    .experience h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 50px;
    }

    .experience h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 30px;
    }

    .experience p {
        font-size: 21px;
        font-weight: 400;
        color: #00233f;
    }
</style>
