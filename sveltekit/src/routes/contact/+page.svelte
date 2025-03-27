<script>
    import { onMount, onDestroy } from "svelte";
    import { _ } from '$lib/services/i18n';
    import Loading2 from '$lib/images/loading2.gif';
    import Check2 from '$lib/images/check2.png';

    let contactFormToken = "";
    let name = "";
    let phoneNumber = "";
    let email = "";
    let message = "";
    let isLoading = false;
    let sentButtonMessage = "Enviar";

    let setcontactFormTokenVar; 
    let btnFormClickedVar; 
    
	onMount(() => {
        const jq = window.$;

        setcontactFormTokenVar = setcontactFormToken;
        btnFormClickedVar = btnFormClicked;

        function setcontactFormToken(token) {
            btnFormClicked();
            contactFormToken = token;
            if (isLoading) return;
            isLoading = true;
            showLoading();
            showDefault();

            jq("#form-name").removeClass("invalid-input");
            jq("#form-email").removeClass("invalid-input");

            //document.getElementById("contactForm").submit();
            saveContactInfo();
        }

        async function saveContactInfo() {
            if (!isValidateForm()) {
                hideLoading();
                showError();
                isLoading = false;
                return;
            }

            const res = await fetch(
                "https://bnlxu4tcmd.execute-api.us-east-2.amazonaws.com/emailContactInfoRS",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        phone_number: phoneNumber,
                        email: email,
                        message: message,
                        token: contactFormToken,
                        origin: 'web'
                    }),
                }
            ).catch((error) => {
                console.log(error);
                isLoading = false;
                showError();
            });

            const json = await res.json();

            if (json.status) {
                showSuccess();
            } else {
                if (json.message == "invalid_captcha") alert("Captcha inválido");
                else alert("Intenta de nuevo mas tarde");
                isLoading = false;
                showError();
            }
        }

        function isValidateForm() {
            if (name == "") {
                jq("#form-name").addClass("invalid-input");
            }

            if (email == "") {
                jq("#form-email").addClass("invalid-input");
            }

            return name != "" && email != "";
        }

        function btnFormClicked() {
            jq('#btnContactForm').addClass("expanded");
            //jq('#loading-gif').css('transform', 'translate(1rem, 0)');
        }

        function showLoading() {
            jq("#loading-gif").css("opacity", "1");
            jq(".contact-form button.btn-rs .circle .icon").css("opacity", "0");
        }

        function hideLoading() {
            jq("#loading-gif").css("opacity", "0");
            jq(".contact-form button.btn-rs .circle .icon").css("opacity", "1");
        }

        function showError() {
            hideLoading();
            jq("#btnContactForm").removeClass("expanded");
            jq(".contact-form button.btn-rs .circle").css("background", "#C70039");
            jq(".contact-form button.btn-rs .circle .icon").css(
                "background",
                "#C70039"
            );
        }

        function showSuccess() {
            hideLoading();
            sentButtonMessage = "Enviado";
            jq("#success-icon").css("opacity", "1");
            jq(".contact-form button.btn-rs .circle .icon").css("opacity", "0");
            jq(".contact-form button.btn-rs .circle").css("background", "#383838");
            jq(".contact-form button.btn-rs .circle .icon").css(
                "background",
                "#383838"
            );
        }

        function showDefault() {
            jq(".contact-form button.btn-rs .circle").css("background", "#383838");
            jq(".contact-form button.btn-rs .circle .icon").css(
                "background",
                "#383838"
            );
        }

	});

    onDestroy(() => {
        setcontactFormTokenVar = null;
        btnFormClickedVar = null;
    });

    
</script>

<div>
    <div class="container-fluid contact" id="contact">
        <div class="container">
            <h1>Envianos tus datos, <br>y te contactamos pronto.</h1>

            <br>

            <div class="container-fluid contact-form">
                <div class="container">
                    <form action="" id="contactForm">
                        <div class="modal-body" style="padding-bottom:0">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="form-name"
                                    bind:value={name}
                                    placeholder="Nombre *"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="form-email"
                                    bind:value={email}
                                    placeholder="E-mail *"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="tel"
                                    class="form-control"
                                    bind:value={phoneNumber}
                                    placeholder="Número Telefónico"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    bind:value={message}
                                    placeholder="Mensaje"
                                    rows="6"
                                />
                            </div>
                        </div>
                    </form>

                    <button
                        type="button"
                        class="btn-rs"
                        id="btnContactForm"
                        data-sitekey="6LdBsO4aAAAAANGj7L2huS0039Uu8yDfh8vJc1tC"
                        data-callback="setcontactFormToken"
                        data-action="submit"><span class="circle" aria-hidden="true">
                            <span class="icon arrow" />
                            <img
                                src={Loading2}
                                alt=""
                                class="gif"
                                id="loading-gif"
                            />
                            <img
                                src={Check2}
                                alt=""
                                class="gif"
                                id="success-icon"
                            />
                        </span>
                        <span class="button-text">{sentButtonMessage}</span></button>
                </div>
            </div>


            <!-- <button
                type="button"
                class="btn-rs"
                data-toggle="modal"
                data-target="#contactFormDialog"
                ><span class="circle" aria-hidden="true">
                    <span class="icon arrow" />
                </span>
                <span class="button-text">Contactar</span>
            </button> -->

        </div>
    </div>
</div>

<style>
    .modal-header {
        border-bottom: 0px !important;
        padding: 0 30px 0 30px;
    }

    .contact-form {
        text-align: center;
        display: flex;
        align-items: center;
        top: 25%;
        position: relative;
        max-width: 700px;
    }

    .modal-content .close {
        color: #fff;
        opacity: 1;
        font-size: 68px;
        font-weight: 100;
    }

    .contact-form button {
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

    .modal-content {
        background-color: #121212;
        padding: 15px;
    }

    .modal-content input,
    textarea {
        font-weight: 400;
        border: 1px solid transparent;
        background-color: #fff;
    }

    .modal-content ::placeholder {
        color: #121212;
    }

    .gif {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 4px;
        left: 4px;
        opacity: 0;
        transition: opacity 0.3s;
        transform: translate(1rem, 0);
    }

    #success-icon {
        width: 32px;
        height: 32px;
        top: 8px;
        left: 24px;
        transform: translate(-0.15rem, 0);
    }
    /* button */
    .contact-form button.btn-rs .circle .icon.arrow::before {
        border-top: 0.125rem solid #121212 !important;
        border-right: 0.125rem solid #121212 !important;
    }

    .contact-form button.btn-rs .circle {
        background: #fff;
    }

    .contact-form button.btn-rs .circle .icon {
        background: #fff;
    }

    .contact-form button.btn-rs .circle .icon.arrow::before {
        border-top: 0.125rem solid #121212;
        border-right: 0.125rem solid #121212;
    }

    .contact-form button.btn-rs .button-text {
        color: #fff;
    }

    .contact-form button:hover .circle .icon.arrow {
        background: #fff;
    }

    .contact-form button:hover .button-text {
        color: #121212;
    }

    .contact {
        height: 80vh;
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
