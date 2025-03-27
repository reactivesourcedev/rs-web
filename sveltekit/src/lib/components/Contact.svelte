<script>
    import { _ } from '$lib/services/i18n';    
</script>

<div>
    
    <div class="container-fluid contact" id="contact">
        <div class="container">
            <h1>¿Más información? Ponte en contacto con nosotros.</h1>

            <a href="/contact">
                <button
                    type="button"
                    class="btn-rs"
                    ><span class="circle" aria-hidden="true">
                        <span class="icon arrow" />
                    </span>
                    <span class="button-text">Contactar</span>
                </button>
            </a>
                        
        </div>
    </div>
</div>

<style>
    .contact {
        height: 50vh;
        text-align: center;
        display: flex;
        align-items: center;
    }

    .contact button, .rating button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
    }
</style>
