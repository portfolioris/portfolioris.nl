<script>
  import Img from '../atoms/objects/Img.svelte';

  export let imgHref;
  export let figcaption;
  export let alt;
</script>

<figure>
  <Img alt={alt} cloudinaryUrl={imgHref} />
  <figcaption>{figcaption}</figcaption>
</figure>
