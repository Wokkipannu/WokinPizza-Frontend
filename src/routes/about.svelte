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

<div class="container mx-auto my-5 space-y-2">
	<p>Wokin Pizza ei suinkaan ole aito pizzeria, joten ottakaahan pizzeriat omille listoillenne näitä makunautintoja ihan ilmaiseksi. Teen työnne puolestanne, ei tarvitse enää itse keksiä lättyjä.</p>
	<p>Pizzoja tulee lisää sitä mukaan kun jaksetaan ja kun lompakko antaa myöten. Ilmaistahan tämä lysti ei ole.</p>
	<p>Wokin Pizzan frontend on rakennettu SvelteKitillä, backend Go:lla ja tietokantana toimii MongoDB.</p>
	<p>Sivustojen lisäksi toiminnassa on <a href="https://twitter.com/WokinPizza" target="_blank" class="text-sky-400">Wokin Pizzan twitter botti</a>, joka twiittailee teille päivittäin satunnaisesti poimittuja täytteitä. Botti pyörii Go:lla.</p>
	<p>Voit katsoa muita hienoja projektejani sivustoiltani <a href="https://www.wokki.dev/" target="_blank" class="text-sky-400">https://www.wokki.dev/</a>.</p>
	<p>Footerista löytyvät satunnaiset niilo22:n inspiroivat lainaukset haetaan <a href="https://misi.karei.dev/niilo" target="_blank" class="text-sky-400">https://misi.karei.dev/niilo</a> APIsta.</p>
</div>