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
            <p>+57 321 6242943</p>
            <p>contact@reactivesource.com</p>
            <p>Cali, Colombia</p>
        </div>
        <div class="social">
            <ul class="p-0">
                <li class="item-1">
                    <a href="https://www.linkedin.com/company/reactive-source-sas/"><i class="fab fa-linkedin-in grow" /></a>
                </li>
                <li class="item-2">
                    <a href="https://www.facebook.com/reactivesource/"><i class="fab fa-facebook-f grow" /></a>
                </li>
                <li class="item-3">
                    <a href="https://twitter.com/Reactive_Source"><i class="fab fa-twitter grow" /></a>
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

<!-- <style>
    .mayus {
        text-transform: uppercase;
    }
</style> -->
