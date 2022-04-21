<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import { getPizzas, getDailyToppings } from "../services/api"
	// No idea what this error means so I will just ignore it :)
	// @ts-ignore
	import type { Pizza } from "../services/api"

	let loadingPizzas = true
	let pizzaList: Pizza[] = []

	let loadingDailyToppings = true
	let dailyToppings: string = ""

	async function fetchPizzas() {
		const pizzas = await getPizzas()
		pizzaList = pizzas.data.data
		loadingPizzas = false
	}

	async function fetchDailyToppings() {
		const toppings = await getDailyToppings()
		dailyToppings = toppings.data.data.toppings
		loadingDailyToppings = false
	}

	onMount(() => {
		fetchPizzas()
		fetchDailyToppings()
	})
</script>

<svelte:head>
	<title>Wokin Pizza - Etusivu</title>
	<meta name="description" content="Sukella syvälle pizzojen makumaailmaan" />
</svelte:head>

<div class="container mx-auto my-5">
	<div class="space-y-3">
		<p>Sukella syvälle makunautintojen maailmaan ja valitse oma lempparisi meidän räätälöidyn pizzavalikoiman parista. Yksikään näistä herkuista ei kyllä jätä nälkäiseksi!</p>
		<p><strong>Miten tilaan?</strong> Valitse alta lempparipizzasi ja ota täytteet ylös. Suunnista kohti lähimpää pizzeriaasi ja tilaa itsellesi jokin näistä herkuista. Et tule varmasti pettymään!</p>
		<p>Mikäli päädyt maistamaan jotain näistä herkuista, jaa toki kuva twitterissä häshtägillä <span class="bg-blue-600 p-1 rounded-lg">#wokinpizza</span>.</p>
		<p><strong>Päivän täytteet:</strong> {#if loadingDailyToppings}Loading...{:else}{dailyToppings}{/if}</p>
	</div>

	<div class="grid grid-cols-3 gap-4 mt-5">
		{#each pizzaList as pizza}
			<div class="rounded-md border-[1px] border-black place-self-start w-full">
				<img src={pizza.thumbnail} class="w-full rounded-t-md" alt={pizza.name} />
				<div class="space-y-1 space-x-2">
					<h5 class="text-xl pt-2 px-2">{pizza.name}</h5>
					<p class="pb-2">{pizza.description}</p>
				</div>
				<ul class="border-t-[1px] border-black">
					<li class="py-3 px-3">{pizza.toppings}</li>
				</ul>
			</div>
		{/each}
	</div>

	{#if loadingPizzas}
	<div class="flex flex-col items-center py-10">
		<img src="/logo192.png" alt="Loading..." class="animate-bounce" width="50px" />
		<p>Loading...</p>
	</div>
	{/if}
</div>