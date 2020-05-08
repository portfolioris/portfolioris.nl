<script>
  export let element = 'div';
  export let fill = false;
  export let fit = false;
  export let align = null;
  export let lap = null;
  export let desk = null;
</script>

<style lang="scss" type="text/scss">
  @import 'engine';
  @import 'supple/lib/objects/layout';
  @import 'supple/lib/utilities/fractions';
</style>

{#if element === 'div'}
  <div
    class="o-layout__cell
      {lap ? `u-fraction--${lap[0]}of${lap[1]}@from-lap` : ''}
      {desk ? `u-fraction--${desk[0]}of${desk[1]}@from-desk` : ''}
    "
    class:o-layout__cell--fill={fill}
    class:o-layout__cell--fit={fit}
    class:o-layout__cell--center={align === 'center'}
  >
    <slot />
  </div>
{:else if element === 'li'}
  <li
    class="o-layout__cell
      {lap ? `u-fraction--${lap[0]}of${lap[1]}@from-lap` : ''}
      {desk ? `u-fraction--${desk[0]}of${desk[1]}@from-desk` : ''}
     "
    class:o-layout__cell--fill={fill}
    class:o-layout__cell--fit={fit}
    class:o-layout__cell--align-center={align === 'center'}
  >
    <slot />
  </li>
{/if}



