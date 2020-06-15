<script>
  export let href = undefined;
  export let type = undefined;
  export let label;
  export let icon = null;
  export let hideLabel = false;
  export let modifier = '';
  export let isActive = false;
  export let onClick = null;

  let className = '';
  export { className as class };
</script>

<style lang="scss" type="text/scss">
  @import 'engine';



  /*  Module
      Core module
      ========================================================================= */

  /**
   * 1. set the lineheight to 0 because we want to negate the baseline space.
   *      This allows us vertical align a lot of things perfectly into the center
   * 2. Calculates the space around the button minus the fixed border-width
   */

  .c-button {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    border: none; //$c-button--border-width solid $c-button--background-color;
    border-radius: 0;
    font-family: $font-family-secondary;
    line-height: 0; /* [1] */
    font-weight: 500;
    text-decoration: none;
    background-color: $green; // $c-button--background-color;
    color: $black; // $c-button--color;
    appearance: none;
    transition-property: color, background-color;
    transition-duration: $base-transition-duration-short;
    transition-timing-function: linear;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus,
    &.is-active,
    &[aria-current=true] {
      background-color: $green;
      color: $white;
      text-decoration: none;
      outline: none;
    }
  }



  /*  Elements
      ========================================================================= */

  /**
   * 1. Reset that line-height again
   */
  .c-button__inner {
    display: inline-flex;
    align-items: stretch;
    line-height: $supple-line-height-ratio; /* [1] */
  }

  .c-button__label {
    display: flex;
    padding: $supple-space-small;
    line-height: 1;
  }

  .c-button--transparent {
    background-color: transparent;
    color: $white;
  }
</style>

<a
  href={href}
  type={type}
  class="c-button  {className}"
  aria-current={isActive ? 'true': null}
  class:c-button--transparent={modifier === 'transparent'}
  on:click={onClick}
>
  <span class="c-button__inner">
    <span class="c-button__label" class:u-visually-hidden="{hideLabel}">
      {label}
    </span>
    {#if icon}
      <span class="c-button__wrap-icon">
        <mark>icon</mark>
      </span>
    {/if}
  </span>
</a>
