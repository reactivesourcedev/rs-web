<script>
    import { _ } from "$lib/services/i18n";
    import LogoMain from '$lib/images/logo_main.png';
    export let language;

    let toLanguage = language == "es" ? "en" : "es";
</script>

<div class="footer container-fluid">
    <div class="container">
        <img
            src={LogoMain}
            alt="Diseño y Desarrollo de Software y Apps"
            width="90"
            height="90"
        />
        <div class="info">
            <p>Reactive Source S.A.S.</p>
            <a href="https://wa.me/573216242943" target="_blank" style="text-decoration:none">
                <p><i class="fab fa-whatsapp"></i> +57 321 6242943</p>
            </a>
            <p>contact@reactivesource.com</p>
            <p>Cali, Colombia</p>
        </div>
        <div class="social">
            <ul class="p-0">
                <li class="item-1">
                    <a href="https://www.linkedin.com/company/reactive-source-sas/" target="_blank"><i class="fab fa-linkedin-in grow" ></a>
                </li>
                <li class="item-2">
                    <a href="https://www.facebook.com/reactivesource/" target="_blank"><i class="fab fa-facebook-f grow" /></a>
                </li>
                <li class="item-3">
                    <a href="https://twitter.com/Reactive_Source" target="_blank"><i class="fab fa-twitter grow" /></a>
                </li>                
            </ul>
        </div>
        <!-- <div class="privacy">
            <ul class="p-0">
                <li class="item-1">
                    <a class="underline" href="//">Política de Privacidad</a>
                </li>
                <li class="item-2">
                    <a class="underline mayus" href="/{toLanguage}"
                        >{toLanguage}</a
                    >
                </li>
            </ul>
        </div> -->
        <div class="copyright">
            <p>
                Copyright © Reactive Source S.A.S. <span
                    >Todos los derechos reservados.</span
                >
            </p>
        </div>
    </div>
</div>

<style>
    .footer {
        background-color: #121212;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .footer img { margin-bottom: 15px; }

    .footer .info { margin-bottom: 50px; }

    .footer .info p {
        font-size: 17px;
        font-weight: 400;
        line-height: 1.3em;
    }

    .footer ul {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer ul li {
        list-style: none;
    }

    .footer ul li a i {
        font-size: 30px;
        margin: 10px;
        color: #fff;
        margin-bottom: 20px;
    }

    .footer ul li a i:hover {
        color: #23A6D5;
        transition: all .4s ease-in-out;
    }

    .footer .social .item-1, .footer .social .item-2 {
        margin-right: 15px;
    }

    .footer .privacy .item-1, .footer .privacy .item-2 {
        padding-right: 15px;
        padding-left: 15px;
    }

    .footer .privacy .item-1 {
        border-right: 1px solid #fff;
    }

    .footer .copyright p, .footer .privacy ul li a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        font-weight: 400;
    }

    .footer .copyright p span {
        font-weight: 600;
    }    
</style> 
