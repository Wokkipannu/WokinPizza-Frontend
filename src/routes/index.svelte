<script lang="ts">
	import PizzaList from '$lib/PizzaList.svelte'
</script>

<svelte:head>
	<title>Wokin Pizza - Etusivu</title>
	<meta name="description" content="Sukella syvälle pizzojen makumaailmaan" />
</svelte:head>

<div class="container mx-auto my-5 sm:text-left text-center">
	<div class="md:flex md:flex-row">
		<div class="space-y-3 md:basis-3/4">
			<p>Sukella syvälle makunautintojen maailmaan ja valitse oma lempparisi meidän räätälöidyn pizzavalikoiman parista. Yksikään näistä herkuista ei kyllä jätä nälkäiseksi!</p>
			<p><strong>Miten tilaan?</strong> Valitse alta lempparipizzasi ja ota täytteet ylös. Suunnista kohti lähimpää pizzeriaasi ja tilaa itsellesi jokin näistä herkuista. Et tule varmasti pettymään!</p>
			<p>Mikäli päädyt maistamaan jotain näistä herkuista, jaa toki kuva twitterissä häshtägillä <span class="bg-blue-600 p-1 rounded-lg border-b-2 border-b-blue-900">#wokinpizza</span>.</p>
		</div>
		<div class="md:basis-1/4 my-5 md:mt-0 ml-0 md:ml-2">
			<a class="twitter-timeline" data-width="500" data-height="270" data-theme="dark" href="https://twitter.com/WokinPizza?ref_src=twsrc%5Etfw">Tweets by WokinPizza</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
		</div>
	</div>
	<div class="w-full border-t border-neutral-900"></div>
	<PizzaList />
</div>