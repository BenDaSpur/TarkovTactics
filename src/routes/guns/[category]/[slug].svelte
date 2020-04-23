<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    // params.slug = decodeURI(decodeURI(params.slug));
    // console.log(params);
    var fullUrl =
      "/guns/" +
      encodeURIComponent(params.category) +
      "/" +
      encodeURIComponent(params.slug) +
      ".json";
    const res = await this.fetch(fullUrl);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { Breadcrumb, BreadcrumbItem } from "sveltestrap";
  export let post;
  post.category = post.category.toLowerCase();
  console.log(post);
</script>

<style>
  .cappa {
    text-transform: capitalize;
  }
</style>

<svelte:head>
  <title>{post.slug}</title>
</svelte:head>

<Breadcrumb>
  <BreadcrumbItem>
    <a href="/">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/guns">Guns</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a class="cappa" href="/guns/{post.category.replace(/ /g, '_')}">
      {post.category}
    </a>
  </BreadcrumbItem>
  <BreadcrumbItem active>{post.slug}</BreadcrumbItem>
</Breadcrumb>

<h1>{post.slug}</h1>

<div class="content">
  {@html post.category}
</div>
