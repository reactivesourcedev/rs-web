<script>
    import { _ } from "$lib/services/i18n";
    import LogoHeaderRS from '$lib/images/logo-header-reactive-source-desarrollo-aplicaciones-moviles-web-apps.png';
</script>

<div class="container-fluid main p-0">
    <div class="container">
        <img
            src={LogoHeaderRS}
            class="main-logo"
            title="logo header reactive source desarrollo aplicaciones moviles web apps"
            alt="logo header reactive source desarrollo aplicaciones moviles web apps"
        />
        <div class="text">            
            <div class="content">Desarrollo de Software y Apps</div>
            <!-- <div class="dash" /> -->
        </div>
        <h6 class="copy">
            Estamos listos para convertir su idea en un producto 
            <strong
                ><span
                    class="txt-rotate"
                    data-period="800"
                    data-rotate="competitivo.,innovador.,intuitivo.,eficiente."
                /></strong
            >
        </h6>
    </div>
</div>

<style>
    .main .text {
        line-height: 50px;
        font-weight: 600;
        font-size: 64px;
        margin-bottom: 20px;
    }

    .main h6.copy { 
        font-size: 20px;
        font-weight: 400;
        line-height: 1.6em;
        letter-spacing: .016em;
    }

    .main {
        height: 90vh;
        text-align: center;
        display: flex;
        align-items: center;
    }

    .main-text {
    display: table-cell;
    vertical-align: middle;
    }

    .main-logo {
        width: 280px;
        margin-bottom: 50px;
    }

    .text .content { display: inline; }

    .text .dash {
        display: inline-block;
        height: 8px;
        width: 30px;
        background-color: #fff;
        animation: blink 1.5s infinite linear;
    }

    .copy .dash {
        display: inline-block;
        height: 2px;
        width: 12px;
        background-color: #fff;
        animation: blink 1.5s infinite linear;
    }
    
</style>
