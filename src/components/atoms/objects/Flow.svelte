<script>
  export let space = null;
</script>

<div class="o-flow" class:o-flow--tiny={space === "tiny"}>
  <slot />
</div>

<style lang="scss">
  @use "@supple-kit/supple-css/objects/flow" with (
    $gaps: (
      "base",
      "tiny",
    )
  );

  .o-flow {
    :global {
      > * + * {
        margin-block-start: var(--flow-gap);
      }
    }
  }
</style>
