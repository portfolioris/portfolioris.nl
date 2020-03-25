<script>
  export let element = 'div';
  export let fill = false;
  export let fit = false;
  export let align;
</script>

<style lang="scss" type="text/scss">
  @import "engine";
  @import "supple/lib/objects/layout";
</style>

{#if element === 'div'}
  <div
    class="o-layout__cell"
    class:o-layout__cell--fill={fill}
    class:o-layout__cell--fit={fit}
    class:o-layout__cell--center={align === 'center'}
  >
    <slot />
  </div>
{:else if element === 'li'}
  <li
    class="o-layout__cell"
    class:o-layout__cell--fill={fill}
    class:o-layout__cell--fit={fit}
    class:o-layout__cell--align-center={align === 'center'}
  >
    <slot />
  </li>
{/if}



