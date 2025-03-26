<script>
  import { _ } from "$lib/services/i18n";
  import { onMount } from "svelte";
  import Central from '$lib/images/workteam/central.png';
  import Left from '$lib/images/workteam/left.png';
  import Right from '$lib/images/workteam/right.png';
  import Shadow from '$lib/images/workteam/shadow.png';


  let wtContent;

  onMount(() => {
    var wtContentWidth = wtContent.clientWidth;
  });
</script>

<div class="container-fluid ideas">
  <div class="container">
    <div class="row">
      <div
        class="col-xl-6 col-lg-6 col-md-12 i-col-first my-auto animation-element slide-left"
      >
        <div class="design-info ">
          <h1>Diseño y Desarrollo a la Medida desde Colombia</h1>
          <h6>Calidad Humana de Principio a Fin</h6>
          <p>
            Trabajamos de su lado para construir productos eficientes, seguros, escalables y de alto impacto. Combinamos la experiencia y la creatividad para transformar sus ideas en las bases fundamentales de un producto innovador.
          </p>
        </div>
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-12 my-auto "
        id="wt-content"
        bind:this={wtContent}
      >
        <img
          src={Central}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-center"
        />
        <img
          src={Left}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-left"
        />
        <img
          src={Right}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-right"
        />
        <img
          src={Shadow}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-shadow-center"
        />
        <img
          src={Shadow}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-shadow-left"
        />
        <img
          src={Shadow}
          class="img-fluid"
          alt="Diseño y Desarrollo a la medida Cali Colombia"
          id="wt-shadow-right"
        />
      </div>
    </div>
  </div>
</div>

<style>
  #wt-content {
    position: relative;
    height: 50vh;
  }

  #wt-content img {
    position: absolute;
  }

  #wt-center {
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    animation: floatin-center 3s ease-out 0s alternate infinite none running;
  }

  #wt-left {
    width: 25%;
    top: 50%;
    left: 18%;
    transform: translate(-50%, -20%);
    z-index: 11;
    animation: floatin-left 2s ease-out 0s alternate infinite none running;
  }

  #wt-right {
    width: 30%;
    top: 50%;
    left: 72%;
    transform: translate(-50%, 0%);
    z-index: 11;
    animation: floatin-right 1s ease-out 0s alternate infinite none running;
  }

  #wt-shadow-center {
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 15%);
    z-index: 0;
  }

  #wt-shadow-left {
    width: 25%;
    top: 50%;
    left: 18%;
    transform: translate(-50%, 110%);
    z-index: 0;
  }

  #wt-shadow-right {
    width: 30%;
    top: 50%;
    left: 72%;
    transform: translate(-50%, 120%);
    z-index: 0;
  }

  .ideas {
      background-color: #121212;
      /*min-height: 90vh;*/
      display: flex;
      align-items: center;
      padding-top: 100px;
      padding-bottom: 100px;
  }

  .ideas img { 
      max-width: 561px; 
      width: 90%;
  }

  .ideas h1, .contact h1 { 
      font-size: 48px;
      line-height: 1.3em;
      font-weight: 600;
      margin-bottom: 15px;
  }

  .ideas h6 {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.3em;
      margin-bottom: 30px;
  }

  .ideas p {
      font-size: 21px;
      font-weight: 300;
  }

  .ideas .design-info { 
      display: table-cell; 
      vertical-align: middle; 
  }

  .ideas .i-col-second { text-align: center; }

  @keyframes floatin-center {
    0% {
      top: 49%;
    }
    100% {
      top: 50%;
    }
  }

  @keyframes floatin-right {
    0% {
      top: 50%;
    }
    100% {
      top: 49%;
    }
  }

  @keyframes floatin-left {
    0% {
      top: 48%;
    }
    100% {
      top: 50%;
    }
  }
</style>
