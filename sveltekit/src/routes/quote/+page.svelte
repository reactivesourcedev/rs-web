<script>
	import { setupI18n } from "$lib/services/i18n";
	import { _ } from "$lib/services/i18n";

	export let id;

	let userLang = id ?? (navigator.language || navigator.userLanguage);
	let language = userLang.includes("es") ? "es" : "en";
	window.language = language;
	setupI18n({ withLocale: language });

	const params = new URLSearchParams(window.location.search);
	let showCloseButton = params.has("showClose")
		? params.get("showClose") == 1
		: false;

	function closeQuoteDialog() {
		console.log("close from Q");
		window.parent.postMessage(
			{
				func: "closeQuoteDialog",
			},
			"*"
		);
	}
</script>

<div class="reveal">
	<div class="back-button simple-buttons">
		<!-- <span><a onclick="back()">Atras</a><span> -->
		{#if showCloseButton}
			<i
				on:click={closeQuoteDialog}
				class="fas fa-times btn-back grow close"
			/>
		{/if}
		<i
			onclick="back()"
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
			><a class="underline" href="javascript:;" onclick="goto('3-0')"
				>{$_("button.begin")}</a
			></span
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<span
			><a class="underline" href="javascript:;" onclick="goto('end1')"
				>{$_("button.get_in_touch")}</a
			></span
		>
	</div>
</div>

<style>
	
</style>
