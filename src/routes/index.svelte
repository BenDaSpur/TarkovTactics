<script>
  import { onMount } from "svelte";

  import guns from "./guns.js";
  import { Col, Container, Row } from "sveltestrap/src/";

  function encode(text) {
    return encodeURI(text);
  }

  let photos = [];

  onMount(async () => {
    Array.from(document.getElementsByClassName("item-link")).forEach(function(
      element,
      index,
      array
    ) {
      element.href = element.href + encodeURI(element.innerText);
    });
  });
</script>

<style>

</style>

<svelte:head>
  <title>Tarkov Tactics</title>
</svelte:head>

<Container>
  {#each guns as guncat}
    <Row class="my-5">
      <Col>
        <h2>{guncat.name}</h2>
      </Col>
      <Col>
        {#each guncat.guns as gun}
          <div>
            <a class="item-link" href="/items/guns/">{gun}</a>
          </div>
        {/each}
      </Col>
    </Row>
  {/each}

</Container>
