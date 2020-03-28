<script>
  import Img from '../atoms/objects/Img.svelte';
  export let imgObj;
  export let figcaption;
</script>

<figure>
  <Img image={imgObj} />
  <figcaption>{figcaption}</figcaption>
</figure>
