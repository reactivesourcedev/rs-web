<script>
    import { onMount, onDestroy } from "svelte";
    import { _ } from "$lib/services/i18n";
    import Quote from '$lib/images/experiencia-cotizador-reactive-source.webp';

    export let language;

    onMount(() => {

        const jq = window.$;
        window.closeQuoteDialog = closeQuoteDialog;

        function closeQuoteDialog() {
            jq("#quoteDialog").modal("hide");
        }

        onDestroy(() => {
            window.closeQuoteDialog = null;
            window.removeEventListener("message");
        });
    });



    //https://cotizador-f662e.web.app/{language}?showClose=1
</script>

<div>
    <div class="container-fluid rating" id="rating">
        <div class="container   animation-element slide-bottom">
            <img
                src={Quote}
                title="experiencia cotizador reactive source"
                alt="experiencia cotizador reactive source"
            />
            <h1>¿Cuánto vale desarrollar mi producto?</h1>
            <p>
                Estime el costo de desarrollo mediante una serie de sencillas preguntas.
            </p>

            <a href="/quote">
                <button
                    type="button"
                    class="btn-rs"                    
                    ><span class="circle" aria-hidden="true">
                        <span class="icon arrow" />
                    </span>
                    <span class="button-text">Cotizar</span>
                </button>
            </a>
            
        </div>
    </div>
</div>

<style>
    .modal-content {
        background-color: #121212;
    }

    .rating { 
        background-color: #121212;
        min-height: 90vh;
        display: flex;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 100px;
        text-align: center; 
    }

    .rating img {
        width: 40vh;
    }

    .rating i {
        font-size: 100px;
        margin-bottom: 15px;
    }

    .rating p { 
        margin-bottom: 15px; 
        font-size: 21px;
        font-weight: 300;
    }

    .rating h1 { 
        font-size: 48px;
        line-height: 1.3em;
        font-weight: 600;
        margin-bottom: 15px;
    }

</style>
