<script>
  import { onMount } from "svelte";

  import guns from "./guns.js";
  import names from "./maps/names.js";
  import quests from "./quests/quests.js";
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
  <Row>
    <Col md={4}>
      <h3 class="display-3">Weapons</h3>

      {#each guns as guncat}
        <Row class="">

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

        </Row>
      {/each}
    </Col>

    <Col md={4}>
      <h3 class="display-3">Maps</h3>
      {#each names as map}
        <Row class="my-2">
          <Col>
            <a class="btn btn-warning" href={'/maps/' + map.name}>{map.name}</a>
          </Col>
        </Row>
      {/each}
    </Col>

    <Col md={4}>
      <h3 class="display-3">Quests</h3>
      {#each quests as quest}
        <Row class="my-2">
          <Col>
            <a class="btn btn-warning" href={'/quests/' + quest.name}>
              {quest.name}
            </a>
          </Col>
        </Row>
      {/each}
    </Col>
  </Row>

</Container>
