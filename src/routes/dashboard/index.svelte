<script lang="ts">
	import { onMount } from "svelte";
	import { getUser } from "../../services/api"
	import type { User } from "../../services/api"

  import Pizzas from "$lib/dashboard/Pizzas.svelte"
  import Toppings from "$lib/dashboard/Toppings.svelte"

  import Modal from '$lib/Modal.svelte'
  import AddPizzaModal from '$lib/modal/AddPizzaModal.svelte'

  let user = {} as User
  async function getUserData() {
    user = await getUser() as User
  }

  let view = "pizzas"
  function changeView(newView: string) {
    view = newView
  }

	onMount(async () => {
    await getUserData()
	})
</script>

<svelte:head>
	<title>Wokin Pizza - Hallinta</title>
	<meta name="description" content="Sukella syvälle pizzojen makumaailmaan" />
</svelte:head>

<div class="container mx-auto my-5">
  {#if user.access_level && user.access_level === 'admin'}
    <div class="mb-2">
      <button class="bg-blue-700 border-blue-600 rounded-md py-2 px-3" type="button" on:click={() => changeView('pizzas')}>Pizzat</button>
      <button class="bg-blue-700 border-blue-600 rounded-md py-2 px-3" type="button" on:click={() => changeView('toppings')}>Täytteet</button>
    </div>

    {#if view === 'pizzas'}
      <Pizzas />
    {:else}
      <Toppings />
    {/if}
  {/if}
</div>