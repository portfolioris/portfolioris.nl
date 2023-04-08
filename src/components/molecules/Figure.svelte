<script>
  import Img from '../atoms/objects/Img.svelte';

  export let imgHref;
  export let figcaption;
  export let alt;
</script>

<style>
    figure {
        margin: 0;
    }
</style>

<figure>
  <Img alt={alt} url={imgHref} />
  <figcaption>{figcaption}</figcaption>
</figure>
