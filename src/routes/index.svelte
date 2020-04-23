<script>
  import { onMount } from "svelte";

  import guns from "./guns.js";
  import {
    Col,
    Container,
    Row,
    UncontrolledCollapse,
    Button,
    CardBody,
    Card
  } from "sveltestrap/src/";

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

  function encodeUrl(name) {
    return encodeURIComponent(encodeURIComponent(name)).toLowerCase();
    // return name.replace(/[^\w\s]/gi, "").replace(/ /g, "_");
  }

  function cleanUp(name) {
    return name
      .replace(/[^\w\s]/gi, "")
      .replace(/ /g, "_")
      .toLowerCase();
  }
</script>

<style>
  .item-link:hover {
    color: black;
  }
</style>

<svelte:head>
  <title>Tarkov Tactics</title>
</svelte:head>

<Container>
  {#each guns as guncat}
    <Row class="">
      <Col>
        <!-- <h2>{guncat.name}</h2> -->
        <Button color="warning" id={cleanUp(guncat.name)} class="mb-3">
          {guncat.name}
        </Button>
        <UncontrolledCollapse toggler={cleanUp(guncat.name)}>
          <Card class="my-3" body>
            {#each guncat.guns as gun}
              <div>
                <a
                  class="item-link"
                  href={'/guns/' + cleanUp(guncat.name) + '/' + encodeUrl(gun)}>
                  {gun}
                </a>
              </div>
            {/each}
          </Card>
        </UncontrolledCollapse>
      </Col>
    </Row>
  {/each}

</Container>
