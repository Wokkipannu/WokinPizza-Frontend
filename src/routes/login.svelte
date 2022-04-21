<script lang="ts">
  function handleClick() {
    return window.location.href = "/api/auth/login"
  }
</script>

<script context="module">
  import axios from 'axios'
  export async function load() {
    axios.get('/api/auth/user')
    .then(() => {
      return window.location.href = "/dashboard"
    })

    return {}
  }
</script>

<svelte:head>
	<title>Wokin Pizza - Kirjaudu</title>
	<meta name="description" content="Sukella syvälle pizzojen makumaailmaan" />
</svelte:head>

<div class="container mx-auto my-5 text-center">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={handleClick}>
    Kirjaudu sisään
  </button>
</div>