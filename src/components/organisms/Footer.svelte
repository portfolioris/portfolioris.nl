<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';

  footer {
    background-color: vars.$color-white;
    color: vars.$color-black;
  }
</style>

<footer>
  <Layer size="medium">
    <Retain size="wall">
      <p>© Portfolioris 2020</p>
    </Retain>
  </Layer>
</footer>
