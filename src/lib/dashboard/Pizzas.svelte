<script lang="ts">
	import { onMount } from "svelte"
  import { toast } from '@zerodevx/svelte-toast'
	import { getPizzas, updatePizza } from "../../services/api"
	import type { Pizza } from "../../services/api"

	let loadingPizzas = true
	let pizzaList: Pizza[] = []

  async function fetchPizzas() {
		const pizzas = await getPizzas()
		pizzaList = pizzas.data.data
		loadingPizzas = false
	}

	onMount(async () => {
		await fetchPizzas()
	})

  let editingPizza: string = ""
  let editingPizzaData: Pizza = {} as Pizza
  let originalPizzaData: Pizza = {} as Pizza

  function editPizza(id: string) {
    resetData()
    editingPizza = id
    editingPizzaData = pizzaList.find(pizza => pizza.id === id) as Pizza
    originalPizzaData = JSON.parse(JSON.stringify(editingPizzaData))
  }

  function resetData() {
    let index = pizzaList.findIndex(pizza => pizza.id === editingPizza)
    if (index !== -1) {
      pizzaList[index] = originalPizzaData
    }
  }

  function cancelEdit() {
    resetData()
    editingPizza = ""
    editingPizzaData = {} as Pizza
  }

  async function savePizza() {
    updatePizza(editingPizzaData as Pizza)
      .then(() => {
        editingPizza = ""
        editingPizzaData = {} as Pizza
        toast.push('Pizza saved!')
      }).catch(err => {
        toast.push('Could not save pizza. View console for error.')
        console.log(err)
      })
  }
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" class="px-6 py-3">
          Nimi
        </th>
        <th scope="col" class="px-6 py-3">
          Tiedot
        </th>
        <th scope="col" class="px-6 py-3">
          Täytteet
        </th>
        <th scope="col" class="px-6 py-3">
          <span class="sr-only">Muokkaa</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each pizzaList as pizza}
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {#if editingPizza === pizza.id}
          <input type="text" placeholder="Pizza name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={editingPizzaData.name} />
          {:else}
          {pizza.name}
          {/if}
        </th>
        <td class="px-6 py-4">
          {#if editingPizza === pizza.id}
          <textarea placeholder="Pizza description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={editingPizzaData.description} />
          {:else}
          {pizza.description}
          {/if}
        </td>
        <td class="px-6 py-4">
          {#if editingPizza === pizza.id}
          <input type="text" placeholder="Pizza toppings" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={editingPizzaData.toppings} />
          {:else}
          {pizza.toppings}
          {/if}
        </td>
        <td class="px-6 py-4 text-right">
          {#if editingPizza === pizza.id}
          <button class="font-medium text-green-600 dark:text-green-500 hover:underline" type="button" on:click={savePizza}>Tallenna</button>
          <button class="font-medium text-red-600 dark:text-red-500 hover:underline" type="button" on:click={cancelEdit}>Peruuta</button>
          {:else}
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" type="button" on:click={() => editPizza(pizza.id)}>Muokkaa</button>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>