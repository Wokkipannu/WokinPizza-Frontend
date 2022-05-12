<script context="module">
  /** @ts-ignore */
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status: status
      }
    };
  }
</script>

<script lang="ts">
  export let message: string
  export let status: string
</script>

<div class="container mx-auto text-center my-5 space-y-5">
  <h1 class="font-bold text-9xl">{status}</h1>
  <p>{message}</p>
</div>