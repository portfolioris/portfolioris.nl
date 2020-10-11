<script>
  export let space = null;
</script>

<style type="text/scss" lang="scss">
  @use 'node_modules/@supple-kit/supple-css/objects/flow' with (
    $gaps: ('base', 'tiny'),
  );

  .o-flow {
    :global {
      > * + * {
        margin-block-start: var(--flow-gap);
      }
    }
  }
</style>

<div
  class="o-flow"
  class:o-flow--tiny={space === 'tiny'}
>
  <slot />
</div>
