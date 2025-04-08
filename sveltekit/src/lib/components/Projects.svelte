<script>
    import { _ } from "$lib/services/i18n";
    import Kidvy from '$lib/images/projects/proyecto-kidvy-app-aplicacion-móvil-reactive-source.webp';
    import Curaduria from '$lib/images/projects/proyecto-curaduria-web-reactive-source.webp';
    import Taximillas from '$lib/images/projects/proyecto-taximillas-app-aplicacion-móvil-web-reactive-source.webp';
    import Quorum from '$lib/images/projects/proyecto-quorum-app-aplicacion-móvil-reactive-source.webp';
    import Sigal from '$lib/images/projects/proyecto-sigal-wms-warehouse-management-system-web-reactive-source.webp';
    import MatterOfListen from '$lib/images/projects/proyecto-matter-of-listen-app-aplicacion-móvil-reactive-source.webp';

</script>

<div class="container-fluid projects img-fluid" id="projects">
    <div class="container">
        <h1 class="animation-element slide-left">Últimos Proyectos</h1>
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
                        title="proyecto kidvy app aplicacion móvil reactive source"
                        alt="proyecto kidvy app aplicacion móvil reactive source"
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
                        title="proyecto curaduria web reactive source"
                        alt="proyecto curaduria web reactive source"
                    />                      
                </div>
            </div>
            <div class="col animation-element slide-top">
                <div class="card mb-3 card-bottom">                    
                    <div class="card-body">
                        <h6 class="card-title">
                            Taxi Millas
                        </h6>
                        <br>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            La mejor app para perdir tu taxi. Viaja seguro, acumula millas y redime viajes gratis.
                        </p>    
                    </div>
                    <img
                        src={Taximillas}
                        class="card-img-bottom"
                        title="proyecto taximillas app aplicacion móvil web reactive source"
                        alt="proyecto taximillas app aplicacion móvil web reactive source"
                    />
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="row">
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">
                    <div class="card-body">
                        <h6 class="card-title">
                            Quorum
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            App para asambleas, votaciones online en tiempo real, votación electrónica de asambleas con resultados confiables y precisos.
                        </p>
                    </div>
                    <img
                        src={Quorum}
                        class="card-img-bottom"
                        title="proyecto quorum app aplicacion móvil reactive source"
                        alt="proyecto quorum app aplicacion móvil reactive source"
                    />                    
                </div>
            </div>
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">                                       
                    <div class="card-body">
                        <h6 class="card-title">
                            Sigal WMS
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            A Warehouse Management System (WMS). Software que ayuda a gestionar su inventario, pedidos y cadena de suministro. 
                        </p>
                    </div> 
                    <img
                        src={Sigal}
                        class="card-img-bottom"
                        title="proyecto sigal wms warehouse management system web reactive source"
                        alt="proyecto sigal wms warehouse management system web reactive source"
                    />                    
                </div>
            </div>
            <div class="col animation-element slide-bottom">
                <div class="card mb-3 card-bottom">                    
                    <div class="card-body">
                        <h6 class="card-title">
                            Matter of Listen
                        </h6>
                        <a href="/experience" class="btn btn-primary stretched-link know-more"></a>
                        <p class="card-text">
                            Implementamos los aplicativos de inicio a fin. Bases de datos, logica de negocio, interfaz gráfica y despliegue en producción.
                        </p>    
                    </div>
                    <img
                        src={MatterOfListen}
                        class="card-img-bottom"
                        title="proyecto matter of listen app aplicacion móvil reactive source"
                        alt="proyecto matter of listen app aplicacion móvil reactive source"
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .projects {
        display: flex;
        text-align: center;
        background-color: #fff;
        padding-top: 150px;
        padding-bottom: 100px;
    }

    /*.projects .card-top {
        border: none;
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
        border-radius: 45px;
        transition: all .2s linear;
        padding-bottom: 50px;
    }*/
    .projects .card {
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);
    }

    .projects .card:hover {
        transform: translate(0, -0.8em);
        /*transform: scale(1.02);*/
        box-shadow: 0 5px 18px 0 rgb(12 0 46 / 20%);
    }


    .projects .card-bottom {
        border: none;
        /*box-shadow: 0 5px 18px 0 rgb(12 0 46 / 8%);*/
        border-radius: 45px;
        transition: all .2s linear;
        padding-top: 30px;
    }

    /*.projects .card-top img {
        border: none;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
    }*/

    .projects .card-bottom img {
        border: none;
        border-bottom-left-radius: 45px;
        border-bottom-right-radius: 45px;
    }

    .projects h1 {
        font-size: 48px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 50px;
    }

    .projects h6 {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.3em;
        color: #00233f;
        margin-bottom: 0px;
    }

    .projects p {
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
