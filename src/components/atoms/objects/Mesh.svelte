<script>
  export let element = 'div';
  export let gap = null;
  export let size = null;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/_internal/functions';
  @use 'node_modules/@supple-kit/supple-css/objects/mesh';

  .o-mesh--size-medium {
    --min-inline-size: 17rem;
  }
</style>

{#if element === 'div'}
  <div
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    class:o-mesh--size-medium={size === 'medium'}
  >
    <slot />
  </div>
{/if}

{#if element = 'ul'}
  <ul
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    class:o-mesh--size-medium={size === 'medium'}
  >
    <slot />
  </ul>
{/if}
