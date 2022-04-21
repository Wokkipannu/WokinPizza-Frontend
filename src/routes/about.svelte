<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Wokin Pizza - Tietoja</title>
	<meta name="description" content="Sukella syvälle pizzojen makumaailmaan" />
</svelte:head>

<div class="container mx-auto my-5">
	<p class="py-2">Wokin Pizza ei suinkaan ole aito pizzeria, joten ottakaahan pizzeriat omille listoillenne näitä makunautintoja ihan ilmaiseksi. Teen työnne puolestanne, ei tarvitse enää itse keksiä lättyjä.</p>
	<p class="py-2">Pizzoja tulee lisää sitä mukaan kun jaksetaan ja kun lompakko antaa myöten. Ilmaistahan tämä lysti ei ole.</p>
	<p class="py-2">Wokin Pizzan frontend on rakennettu SvelteKitillä, backend Go:lla ja tietokantana toimii MongoDB.</p>
	<p class="py-2">Sivustojen lisäksi toiminnassa on <a href="https://twitter.com/WokinPizza" target="_blank" class="text-sky-400">Wokin Pizzan twitter botti</a>, joka twiittailee teille päivittäin satunnaisesti poimittuja täytteitä. Botti pyörii Go:lla.</p>
	<p class="py-2">Voit katsoa muita hienoja projektejani sivustoiltani <a href="https://www.wokki.dev/" target="_blank" class="text-sky-400">https://www.wokki.dev/</a>.</p>
	<p class="py-2">Footerista löytyvät satunnaiset niilo22:n inspiroivat lainaukset haetaan <a href="https://misi.mxrr.dev/niilo" target="_blank" class="text-sky-400">https://misi.mxrr.dev/niilo</a> APIsta.</p>
</div>