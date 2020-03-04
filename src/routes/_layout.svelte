<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<Nav {segment} />

<main>
  <div class="container-fluid mt-5">
    <slot />
  </div>
</main>
