<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`quests/${params.slug}.json`);
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
  import quests from "./quests.js";

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
          QUESTS:
          {#each post.quests as quest}
            <Row>
              <Col>{quest.name}</Col>
            </Row>
          {/each}
        </Col>
      </Row>
    </Col>
    <Col md="9">

      <Row />
    </Col>
  </Row>

</Container>
