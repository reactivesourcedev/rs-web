<script>
	import { setupI18n } from "$lib/services/i18n";
	import { _ } from "$lib/services/i18n";

	import { onMount } from 'svelte';
	import questions from "$lib/quote/questions/es.json";
	import '$lib/quote/css/style.css';
	import '$lib/quote/css/form.css';

	import Reveal from 'reveal.js';

	export let id;

	/* let userLang = id ?? (navigator.language || navigator.userLanguage);
	let language = userLang.includes("es") ? "es" : "en";
	window.language = language;
	setupI18n({ withLocale: language }); */
	setupI18n({ withLocale: "es" });

	//var url = '../../lib/questions';
	var options = [];
	var navigation = ["0-0"];
	var totalPages = 5;
	var resumen = { plataforma: {} };
	var total = 0;
	var isMobile = false; //initiate as false
	let showCloseButton;

	let closeQuoteDialog;

	onMount(() => {

		const params = new URLSearchParams(window.location.search);
		showCloseButton = params.has("showClose")
			? params.get("showClose") == 1
			: false;

		closeQuoteDialog =  function() {
			console.log("close from Q");
			window.parent.postMessage(
				{
					func: "closeQuoteDialog",
				},
				"*"
			);
		}

		globalThis.$(document).ready(function() {
			// device detection
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) 
				isMobile = true;
			resize();
			/*globalThis.$.ajax({
				url: `${url}/${window.language}.json`, // path to file				
				dataType: 'text', // type of file (text, json, xml, etc)
				success: function(data) { // callback for successful completion
					jsonLoaded(data);
				},
				error: function() { // callback if there's an error
					alert("error");
				}					
			});*/	

			console.log(questions);

			jsonLoaded(questions);
			
		});

		function jsonLoaded(data) {
			var inSection = -1;
			var elements = "";
			console.log("jsonLoaded");

			//options = JSON.parse(data).options;
			options = data.options;

			globalThis.$.each(options, function(k, v) {
				/*v.options.forEach(function(ans){
				answers += "<span><a onclick='goto(´"+ans.answer.+"´)'>"+ans.answer+"</a></span>";
				});
				globalThis.$(".options").html(answers);*/
				if (v.endOfSection) {
					inSection = v.endOfSection;
					elements += "<section>";
				}
				elements += "<section><h3>" + v.title + "</h3>" + v.description + "</section>";
				if (inSection == k) {
					inSection = -1;
					elements += "</section>";
				} else if (inSection == -1) totalPages++;
			});

			globalThis.$(".slides").html(elements);

			Reveal.initialize({ controls: false, touch: false, progress: false, keyboard: false, minScale: 0.35, maxScale: 1 });

		}

		globalThis.$(window).resize(function() {
			resize();
		});

    });

	function back() {
		console.log(navigation);
		if (navigation.length > 0) {
			navigation.pop();
			var preview = navigation[navigation.length - 1];
			navigation.pop();
			goto(preview);
		}
	}

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function goto(dest) {
		if (dest == "0-0") globalThis.$('.back-button .back').hide();
		else globalThis.$('.back-button .back').show();

		navigation.push(dest);
		var sectioned = dest.split("-");
		var answers = "";
		let page = (sectioned[0] == "end0") ? totalPages - 2 : sectioned[0];
		page = (sectioned[0] == "end1") ? totalPages - 1 : page;
		Reveal.slide((page == "end2") ? totalPages : page, (sectioned.length == 2) ? parseInt(sectioned[1]) : 0, 0);

		console.log(dest);
		console.log(options[dest]);

		delete resumen[options[dest].section];
		options[dest].options.forEach(function(ans) {
			//console.log(ans);
			if (ans.action) {
				//if (ans.goto == "none"){
				if (ans.goto == "none")
					answers += "<span><a  class='underline' onclick=" + ans.action + ",this) >" + ans.answer + "</a></span>";
				else
					answers += "<span><a  class='underline' onclick=" + ans.action + ",this,'" + ans.goto + "','" + sectioned[0] + "-')>" + ans.answer + "</a></span>";
				//}
			} else {
				answers += "<span><a  class='underline' onclick='goto(`" + ans.goto + "`)' hasActions='" + ans.hasActions + "'>" + ans.answer + "</a></span>";
			}
			/*if (ans.goto!="none")
			answers += "<span><a onclick='goto(`"+ans.goto+"`)' hasActions='"+ans.hasActions+"'>"+ans.answer+"</a></span>";
			else
			answers += "<span><a onclick='selectOption(this)' execute=''>"+ans.answer+"</a></span>";
			*/
		});
		globalThis.$(".options").html(answers);
		resize();

	}

	function selectOption(section, value, price, obj) {
		if (!resumen[section]) resumen[section] = {};

		if (globalThis.$(obj).attr("selected")) {
			globalThis.$(obj).attr("selected", false);
			globalThis.$(obj).css("color", "#2a76dd");
			delete resumen[section][value];
		} else {
			globalThis.$(obj).attr("selected", true);
			globalThis.$(obj).css("color", "#f00");
			resumen[section][value] = price;
		}
	}

	function addParameter(section, value, price, obj, page) {
		if (typeof(value) === "boolean" || typeof(value) === "number")
			resumen[section] = { value: value, price: price };
		else {
			resumen[section] = {};
			resumen[section][value] = price;
		}
		goto(page);
	}

	function checkPlatforms(section, obj, page, sub) {
		if (Object.keys(resumen[section]).length > 0) {
			if (Object.keys(resumen[section]).length == 1 && resumen[section]["web"]) goto(page);
			else goto(sub + "1");
		}
	}

	function addParameterAndCalculate(section, value, price, obj, page) {
		addParameter(section, value, price, obj, page);
		calcularCosto();
	}

	function cerrar(fail, obj) {
		if (parent.closePopup)
			parent.closePopup();
	}

	function putTotalIn(fail, obj, toPage, fromPage) {
		goto(toPage);
		globalThis.$("#cot_total").val(total);
		globalThis.$("#cot_json").val(JSON.stringify(resumen));
	}

	function calcularCosto() {
		var plataformas = Object.keys(resumen["plataforma"]).length;
		var mobile = 0;
		var factorDuplicado = 1;
		var factorPlataforma = 0;
		var web = 0;
		var totalMobile = 0;
		var error = 0;
		var designComplex = 1;
		var design = 0;
		var calidad = 0;

		total = 0;

		if (resumen["nativo"] && !resumen["nativo"].value) { // Cuando no es desarrollo nativo
			factorDuplicado = .3;
			web = 1;
		}
		for (var plat in resumen["plataforma"]) {
			if (plat != "web") {
				mobile++;
				factorPlataforma += resumen["plataforma"][plat] * factorDuplicado;
			} else web = 1;
		}

		globalThis.$.each(resumen, function(key, v) {
			if (key != "plataforma") {
				if (key == "paga" || key == "publicidad" || key == "comprasEnApp" || key == "integracion") {
					totalMobile += v.price * mobile;
				} else if (key == "secciones" || key == "dinamico") {
					designComplex *= v.price;
				} else if (key == "interfaz") {
					design = v.price;
				} else if (key == "calidad") {
					calidad = v.price;
				} else if (key == "cpanel") {
					total *= v.price;
				} else {
					total += v.price;
				}
			}
		});

		total = (((total + (design * designComplex)) * (web + factorPlataforma)) * calidad) + totalMobile;
		//alert("price: " + total);
		console.log("plataformas : " + plataformas);
		console.log("mobile : " + mobile);
		console.log("factorDuplicado : " + factorDuplicado);
		console.log("factorPlataforma : " + factorPlataforma);
		console.log("web : " + web);

		total = Math.floor(total);
		error = Math.floor(total * .08);
		globalThis.$(".present #cost1").text("$" + numberWithCommas(total - error) + " COP");
		globalThis.$(".present #cost2").text("$" + numberWithCommas(total + error) + " COP");
		//globalThis.$( "div.second" ).replaceWith( $(".present").html().replace("$cost", "$"+total) );

		//globalThis.$(".present").html($(".present").html().replace("$cost", "$"+total));
	}

	function resize() {
		/*if (isMobile)
		globalThis.$( ".simple-buttons span a" ).css( "font-size", globalThis.$( window ).width()*.08 );
		else
		globalThis.$( ".simple-buttons span a" ).css( "font-size", globalThis.$( window ).width()*.04 );
		*/
		globalThis.$(".contact table tr td .input").css("font-size", globalThis.$(".contact table tr td").height() * .5);
		globalThis.$(".contact table tr td .textarea").css("font-size", globalThis.$(".contact table tr td").height() * .5);
		globalThis.$(".contact table tr td .submit").css("font-size", globalThis.$(".contact table tr td").height() * .5);

	}

	
</script>

<div class="reveal">
	<div class="back-button simple-buttons">
		<!-- <span><a onclick="back()">Atras</a><span> -->
		{#if showCloseButton}
			<i
				onclick={closeQuoteDialog}
				class="fas fa-times btn-back grow close"
			/>
		{/if}
		<i
			onclick={() => back()}
			class="fas fa-chevron-left btn-back grow back"
			style="display: none;"
		/>
	</div>
	<div class="slides">
		<!--section>
			<h3>Single Horizontal Slide</h3>
			hi
		</section>
		<section>
			<section>Vertical Slide 1</section>
			<section>Vertical Slide 2</section>
		</section-->
	</div>
	<div class="options simple-buttons">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<span
			><a class="underline" href="javascript:;" onclick={() => goto('3-0')}
				>{$_("button.begin")}</a
			></span
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<span
			><a class="underline" href="javascript:;" onclick={() => goto('end1')}
				>{$_("button.get_in_touch")}</a
			></span
		>
	</div>
</div>

<style>
	
</style>
