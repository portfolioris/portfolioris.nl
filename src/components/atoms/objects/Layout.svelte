<script>
  export let element = 'div';
  export let align;
  export let gutter;
  export let margin;
</script>

<style lang="scss" type="text/scss">
  @import "engine";
  @import "supple/lib/objects/layout";

  .o-layout--margin-none {
    margin-bottom: 0;
  }
</style>

{#if element === 'div'}
  <div
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gutter-small={gutter === 'small'}
    class:o-layout--margin-none={margin === 'none'}
  >
    <slot />
  </div>
{:else if element === 'ul'}
  <ul
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gutter-small={gutter === 'small'}
    class:o-layout--margin-none={margin === 'none'}
  >
    <slot />
  </ul>
{/if}
