<script>
  import Img from "../atoms/objects/Img.svelte";

  export let imgHref;
  export let figcaption;
  export let alt;
</script>

<figure>
  <Img {alt} url={imgHref} />
  <figcaption>{figcaption}</figcaption>
</figure>

<style>
  figure {
    margin: 0;
  }
</style>
