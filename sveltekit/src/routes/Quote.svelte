<script>
    import { onMount, onDestroy } from "svelte";
    import { _ } from "$lib/services/i18n";
    import Budget from '$lib/images/freepik-fullvector-budget.png';

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
    <div
        class="modal fade"
        id="quoteDialog"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen" role="document">
            <div class="modal-content">
                <div>
                    <!-- <iframe
                        id="quoteIframe"
                        title="Inline Frame Example"
                        src="https://cotizador-f662e.web.app/{language}?showClose=1"
                    /> -->
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid rating" id="rating">
        <div class="container   animation-element slide-bottom">
            <img
                src={Budget}
                alt="Costo de desarrollo de software y apps"
            />
            <h1>¿Cuánto vale desarrollar mi producto?</h1>
            <p>
                Estime el costo de desarrollo mediante una serie de sencillas preguntas.
            </p>
            <button
                type="button"
                class="btn-rs"
                data-toggle="modal"
                data-target="#quoteDialog"
                ><span class="circle" aria-hidden="true">
                    <span class="icon arrow" />
                </span>
                <span class="button-text">Cotizar</span></button
            >
        </div>
    </div>
</div>

<style>
    /*
    .modal-header {
        border-bottom: 0px !important;
        padding: 0 30px 0 30px;
    }
    */
    
    /*iframe {
        width: calc(100% - 4px);
        height: calc(100vh - 8px);
        border: 0px;
    }*/

    .modal-content {
        background-color: #121212;
    }
    /*
    .modal-content .close {
        color: #fff;
        opacity: 1;
        font-size: 68px;
        font-weight: 100;
    }
    */
</style>
