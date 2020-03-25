<script>
  export let element = 'div';
  export let align;
  export let gutter;
</script>

<style lang="scss" type="text/scss">
  @import "engine";
  @import "supple/lib/objects/layout";
</style>

{#if element === 'div'}
  <div
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gutter-small={gutter === 'small'}
  >
    <slot />
  </div>
{:else if element === 'ul'}
  <ul
    class="o-layout"
    class:o-layout--align-middle={align === 'middle'}
    class:o-layout--gutter-small={gutter === 'small'}
  >
    <slot />
  </ul>
{/if}
