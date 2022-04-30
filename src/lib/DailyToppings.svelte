<script lang="ts">
  import { onMount } from "svelte";
	import { getDailyToppings } from "../services/api"

	let loadingDailyToppings = true
	let dailyToppings: string = ""

	async function fetchDailyToppings() {
		const toppings = await getDailyToppings()
		dailyToppings = toppings.data.data.toppings
		loadingDailyToppings = false
	}

  onMount(() => {
		fetchDailyToppings()
	})

  export let prefix = ""
</script>

<p><strong>{prefix}</strong> {#if loadingDailyToppings}Loading...{:else}{dailyToppings}{/if}</p>