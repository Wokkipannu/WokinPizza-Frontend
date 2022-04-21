<script lang="ts">
  import { onMount } from "svelte";

  interface Quote {
    id: string,
    text: string,
    number: number
  }

  let loadingQuote = true
  let quote: Quote = { id: "", text: "", number: 0 }

  onMount(async () => {
    const res = await fetch(import.meta.env.VITE_QUOTE_PATH);
    quote = await res.json();
    loadingQuote = false
  })
</script>

<div class="divider"></div>
<div class="container mx-auto">
  <footer class="py-3 my-4">
    <ul class="flex flex-row justify-center pb-3 items-center">
      <li>
        <a class="nav-link px-2 text-muted" sveltekit:prefetch href="/">
          Etusivu
        </a>
      </li>
      <li>
        <a class="nav-link px-2 text-muted" sveltekit:prefetch href="/about">
          Tietoja
        </a>
      </li>
      <li>
        <a class="nav-link px-2 text-muted" href="https://twitter.com/WokinPizza" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a class="nav-link px-2 text-muted" href="/login">
          Kirjaudu
        </a>
      </li>
    </ul>
    <hr/>
    <p class="text-center pt-3"><i>"{quote.text}"</i></p>
  </footer>
</div>