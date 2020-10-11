<script>
  export let element = 'div';
  export let align = null;
  export let gutter = null;
  export let margin = null;
  export let hasEqualheight = false;
</script>

<style lang="scss" type="text/scss">
  /**
   * 1. Add :global to apply style cross-component
   */
  @use 'node_modules/@supple-kit/supple-css/objects/layout';

  .o-layout--margin-none {
    margin-bottom: 0;
  }

  .o-layout--equalheight {
    > :global(.o-layout__cell) {
      display: flex;

      > :global(*) {
        width: 100%; /* [1] */
      }
    }
  }
</style>

{#if element === 'div'}
  <div
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gap-base={gutter === 'base'}
    class:o-layout--gap-small={gutter === 'small'}
    class:o-layout--margin-none={margin === 'none'}
    class:o-layout--equalheight={hasEqualheight}
  >
    <slot />
  </div>
{:else if element === 'ul'}
  <ul
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gap-base={gutter === 'base'}
    class:o-layout--gap-small={gutter === 'small'}
    class:o-layout--margin-none={margin === 'none'}
    class:o-layout--equalheight={hasEqualheight}
  >
    <slot />
  </ul>
{/if}
