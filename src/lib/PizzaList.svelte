<script lang="ts">
	import { onMount } from "svelte";
	import { getPizzas } from "../services/api"
	import type { Pizza } from "../services/api"

	let loadingPizzas = true
	let pizzaList: Pizza[] = []

	async function fetchPizzas() {
		const pizzas = await getPizzas()
		pizzaList = pizzas.data.data
		loadingPizzas = false
	}

	onMount(() => {
		fetchPizzas()
	})
</script>

<div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-5">
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