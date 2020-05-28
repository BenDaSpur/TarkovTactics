<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`maps/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  import Image from "svelte-image";
  import { Col, Container, Row } from "sveltestrap/src";
  import maps from "./names.js";

  // let image_array = [];
  // // alert(maps[0].name);
  // switch (window.location) {
  //   case "maps/factory":
  //     image_array = maps[0].maps;
  //   default:
  //     break;
  // }
</script>

<style>
  h1 {
    text-transform: capitalize;
  }
</style>

<svelte:head>
  <title>{post.name}</title>
</svelte:head>

<Container fluid>
  <Row>
    <Col md="3">
      <Row>
        <Col>
          <h1>{post.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>{post.desc}</Col>
      </Row>
      <Row>
        <Col>TIME: {post.duration} minutes</Col>
      </Row>
      <Row>
        <Col>PLAYERS: {post.players}</Col>
      </Row>
      <Row>
        <Col>ENEMIES: {post.enemies}</Col>
      </Row>
      <Row>
        <Col>
          MAPS:
          {#each post.maps as map}
            <Row>
              <Col>
                <a href="/{post.name}/{map}" target="_blank">{map}</a>
              </Col>
            </Row>
          {/each}
        </Col>
      </Row>
    </Col>
    <Col md="9">

      <Row>
        {#each post.maps as map}
          <Col md={12 / post.maps.length}>
            <a href="/{post.name}/{map}" target="_blank">{map}</a>
            {#if map.includes('.jpg') || map.includes('.png')}
              <Image src="{post.name}/{map}" />
              <!-- <img class="img-fluid" src="/{post.name}/{map}" alt={map} /> -->
            {/if}
          </Col>
        {/each}
      </Row>
    </Col>
  </Row>

</Container>
