<script>
  export let element = 'div';
  export let gap = null;
  export let size = null;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/_internal/functions';
  @use 'node_modules/@supple-kit/supple-css/objects/mesh';

  .o-mesh--320 {
    --min-inline-size: calc((320 / #{functions.strip-units(vars.$font-size)}) * 1rem);
  }
</style>

{#if element === 'div'}
  <div
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    class:o-mesh--320={parseFloat(size) === 320}
  >
    <slot />
  </div>
{/if}

{#if element = 'ul'}
  <ul
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    class:o-mesh--320={parseFloat(size) === 320}
  >
    <slot />
  </ul>
{/if}
