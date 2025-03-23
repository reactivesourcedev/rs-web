<script>
    import { onMount } from 'svelte';

	onMount(() => {

		const jq = window.$;

        jq(document).ready(function () {
            jq(window).scroll(function () {
                if (jq(this).scrollTop() > 100) {
                    jq('#scroll-top').fadeIn();
                } else {
                    jq('#scroll-top').fadeOut();
                }
            });
            jq('#scroll-top').click(function () {
                jq("html, body").animate({ scrollTop: 0 }, 100);
                return false;
            });
        });
	});
</script>

<button id="scroll-top" title="Go to top">
    <div class="loader">
        <div class="spin"></div>
        <div class="bounce"></div>
    </div>
</button>

<style>

</style>

