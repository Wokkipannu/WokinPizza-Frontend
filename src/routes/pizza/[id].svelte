<script lang="ts">
  import type { Pizza } from '../../services/api'

  export let pizza: Pizza
</script>

<script context="module">
  /** @ts-ignore */
  export async function load({ params }) {
    const url = `https://pizza.wokki.dev/api/pizza/${params.id}`
    const response = await fetch(url)

    if (response.status !== 200) {
      return {
        status: response.status,
        error: new Error(`Pizzaasi etsiessä tapahtui virhe: ${params.id}`)
      }
    }

    return {
      status: response.status,
      props: {
        pizza: response.ok && (await response.json().then(json => json.data))
      }
    }
  }
</script>

<svelte:head>
	<title>Wokin Pizza - {pizza.name}</title>
	<meta name="description" content={`Wokin Pizza - ${pizza.name}`} />
  <meta property="og:title" content={`Wokin Pizza - ${pizza.name}`} />
  <meta property="og:description" content={pizza.description} />
  <meta property="og:image" content={pizza.image} />
  <meta property="og:url" content={`https://pizza.wokki.dev/pizza/${pizza.id}`} />
  <meta property="og:type" content="article" />
  <meta property="twitter:title" content={`Wokin Pizza - ${pizza.name}`} />
  <meta property="twitter:description" content={pizza.description} />
  <meta property="twitter:image" content={pizza.image} />
</svelte:head>

<div class="container mx-auto my-5">
  <div class="md:flex md:flex-row">
    <div class="md:basis-1/4 p-2">
      <a href={pizza.image} target="_blank">
        <img src={pizza.thumbnail} alt={pizza.name} class="w-full">
      </a>
    </div>
    <div class="md:basis-3/4 p-2 space-y-2">
      <h5 class="text-xl pb-2 font-bold">{pizza.name}</h5>
      <p>{pizza.description}</p>
      <p><strong>Täytteet:</strong> {pizza.toppings}</p>
    </div>
  </div>
</div>