<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<SvelteToast />
<Header />
<main class="md:px-0 px-5">
	<slot />
</main>
<Footer />