<script>
    import { _ } from "$lib/services/i18n";
    import Kidvy from '$lib/images/work/trabajo-kidvy-reactive-source-desarrollo-aplicaciones-moviles-web-apps.jpg';
    import Curaduria from '$lib/images/work/trabajo-curaduria-reactive-source-desarrollo-aplicaciones-moviles-web-apps.jpg';
    import Taximillas from '$lib/images/work/trabajo-taximillas-reactive-source-desarrollo-aplicaciones-moviles-web-apps.jpg';

    import Agile from '$lib/images/freekpik-fullvector-agile.jpg';
    import FullStack from '$lib/images/freekpik-fullvector-full-stack.jpg';

</script>

<div class="container-fluid latest-work img-fluid">
    <div class="container">
        <h1 class="animation-element slide-left">Últimos Trabajos</h1>
        <div class="row">
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-bottom">
                    <div class="card-body">
                        <h6 class="card-title">
                            Kidvy
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            La aplicación esencial para las guarderías y los padres. <br>
                            Gestiona la asistencia, las inscripciones, el personal y la comunicación.
                        </p>                        
                    </div>
                    <img
                        src={Kidvy}
                        class="card-img-bottom"
                        alt="trabajo kidvy reactive source desarrollo aplicaciones moviles web apps"
                    />                                       
                </div>
            </div>
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-bottom">                                    
                    <div class="card-body">
                        <h6 class="card-title">
                            Curaduria Urbana 2<br />
                            System
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            Aplicación Web, gestor documental, seguimiento de procesos para licencias de construcción.
                        </p>
                    </div>  
                    <img
                        src={Curaduria}
                        class="card-img-bottom"
                        alt="trabajo curaduria reactive source desarrollo aplicaciones moviles web apps"
                    />                      
                </div>
            </div>
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-bottom">                    
                    <div class="card-body">
                        <h6 class="card-title">
                            Taxi Millas
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            La mejor app para perdir tu taxi. Viaja seguro, acumula millas y redime viajes gratis.
                        </p>    
                    </div>
                    <img
                        src={Taximillas}
                        class="card-img-bottom"
                        alt="trabajo taximillas reactive source desarrollo aplicaciones moviles web apps"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">
                    <div class="card-body">
                        <h6 class="card-title">
                            Computación<br />
                            en la nube
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            Tenemos experiencia en el uso de servicios como Google Cloud, AWS y Firebase. Para despliegue de aplicaciones completas o microservicios.
                        </p>

                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>

                    </div>
                    <img
                        src={FullStack}
                        class="card-img-bottom"
                        alt="Servicios de Computación en la nube"
                    />                    
                </div>
            </div>
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">                                       
                    <div class="card-body">
                        <h6 class="card-title">
                            Desarrollo<br />
                            Ágil
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
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
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">                    
                    <div class="card-body">
                        <h6 class="card-title">
                            Desarrollo<br />
                            Full-Stack
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            Implementamos los aplicativos de inicio a fin. Bases de datos, logica de negocio, interfaz gráfica y despliegue en producción.
                        </p>    
                    </div>
                    <img
                        src={FullStack}
                        class="card-img-bottom"
                        alt="Desarrollo full-stack"
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .latest-work {
        display: flex;
        text-align: center;
        background-color: #fff;
        padding-top: 150px;
        padding-bottom: 100px;
    }

    /*.latest-work .card-top {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-bottom: 50px;
    }*/

    .latest-work .card-bottom {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-top: 30px;
    }

    /*.latest-work .card-top img {
        border: none;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
    }*/

    .latest-work .card-bottom img {
        border: none;
        border-bottom-left-radius: 45px;
        border-bottom-right-radius: 45px;
    }

    .latest-work h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 50px;
    }

    .latest-work h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 0px;
    }

    .latest-work p {
        font-size: 21px;
        font-weight: 400;
        color: #00233f;
    }

    /*button.btn-rs .button-text {
        position: static;
        color: #00233f;
    }*/

    .know-more{
        height: 0px;
        width: 0px;
        color: #00233f;
        background-color: #fff;
        border-color: #fff;
    }
    
</style>
