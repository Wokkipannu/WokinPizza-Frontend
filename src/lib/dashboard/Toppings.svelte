<script lang="ts">
  import { onMount } from "svelte"
  import { toast } from '@zerodevx/svelte-toast'
  import { getToppings, updateTopping } from "../../services/api"
  import type { Topping } from "../../services/api"

  let loadingToppings = true
  let toppingList: Topping[] = []

  async function fetchToppings() {
    const toppings = await getToppings()
    toppingList = toppings.data.data
    loadingToppings = false
  }

  onMount(async () => {
    await fetchToppings()
  })

  let editingTopping: string = ""
  let editingToppingData: Topping = {} as Topping
  let originalToppingData: Topping = {} as Topping

  function editTopping(id: string) {
    resetData()
    editingTopping = id
    editingToppingData = toppingList.find(topping => topping.id === id) as Topping
    originalToppingData = JSON.parse(JSON.stringify(editingToppingData))
  }

  function resetData() {
    let index = toppingList.findIndex(topping => topping.id === editingTopping)
    if (index !== -1) {
      toppingList[index] = originalToppingData
    }
  }

  function cancelEdit() {
    resetData()
    editingTopping = ""
    editingToppingData = {} as Topping
  }

  async function saveTopping() {
    updateTopping(editingToppingData as Topping)
      .then(() => {
        editingTopping = ""
        editingToppingData = {} as Topping
        toast.push('Topping saved!')
      }).catch(err => {
        toast.push('Could not save topping. View console for error.')
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
          Täyte
        </th>
        <th scope="col" class="px-6 py-3">
          <span class="sr-only">Muokkaa</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each toppingList as topping}
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {#if editingTopping === topping.id}
          <input type="text" placeholder="Topping" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={editingToppingData.topping} />
          {:else}
          {topping.topping}
          {/if}
        </th>
        <td class="px-6 py-4 text-right">
          {#if editingTopping === topping.id}
          <button class="font-medium text-green-600 dark:text-green-500 hover:underline" type="button" on:click={saveTopping}>Tallenna</button>
          <button class="font-medium text-red-600 dark:text-red-500 hover:underline" type="button" on:click={cancelEdit}>Peruuta</button>
          {:else}
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" type="button" on:click={() => editTopping(topping.id)}>Muokkaa</button>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>