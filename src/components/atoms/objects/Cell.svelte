<script>
  export let element = 'div';
  export let fill = false;
  export let fit = false;
  export let align = null;
  export let lap = null;
  export let desk = null;
</script>

<style lang="scss" type="text/scss">
  @use 'node_modules/@supple-kit/supple-css/objects/layout';
  @use 'node_modules/@supple-kit/supple-css/utilities/colspan' with (
    $in-query: (
      lap,
      desk,
    ),
  );

  /**
     * Element: cell
     * Only use cell wrapper element when everything else fails 😅
     */
  .o-layout__cell {
    margin-inline-start: 0;
    padding-inline-start: var(--layout-gap);
  }
</style>

{#if element === 'div'}
  <div
    class="o-layout__cell
      {lap ? `u-colspan-${lap}@from-lap` : ''}
      {desk ? `u-colspan-${desk}@from-desk` : ''}
    "
    class:o-layout__fill={fill}
    class:o-layout__fit={fit}
    class:o-layout__align-inline-center={align === 'center'}
  >
    <slot />
  </div>
{:else if element === 'li'}
  <li
    class="o-layout__cell
      {lap ? `u-colspan-${lap}@from-lap` : ''}
      {desk ? `u-colspan-${desk}@from-desk` : ''}
    "
    class:o-layout__fill={fill}
    class:o-layout__fit={fit}
    class:o-layout__align-inline-center={align === 'center'}
  >
    <slot />
  </li>
{/if}



