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

  function cleanUp(name) {
    return name.replace(/[^\w\s]/gi, "").replace(/ /g, "");
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
    <Row class="my-5">
      <Col>
        <!-- <h2>{guncat.name}</h2> -->
        <Button color="warning" id={cleanUp(guncat.name)} class="mb-3">
          {guncat.name}
        </Button>
        <UncontrolledCollapse toggler={cleanUp(guncat.name)}>
          <Card body>
            {#each guncat.guns as gun}
              <div>
                <a class="item-link" href={'/items/guns/' + cleanUp(gun)}>
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
