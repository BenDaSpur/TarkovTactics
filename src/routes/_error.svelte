<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
  import "bootstrap/dist/css/bootstrap.min.css";

  import Nav from "../components/Nav.svelte";

  import Image from "svelte-image";
</script>

<style>

</style>

<svelte:head>
  <title>{status}</title>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous" />
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

<div class="col-3">
  <Image src="/404.jpg" />

</div>

<p>Gone... but not forgotten...</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
