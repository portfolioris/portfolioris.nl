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
  @use 'src/sass/vars';

  /*  Block
      ========================================================================= */

  /**
   * 2. Calculates the space around the button minus the fixed border-width
   */

  .c-button {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    border: none; //$c-button--border-width solid $c-button--background-color;
    border-radius: 0;
    font-family: vars.$font-family-secondary;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--green); // $green; // $c-button--background-color;
    color: vars.$color-black; // $c-button--color;
    appearance: none;
    transition: vars.$base-transition-duration-short vars.$base-timing-function;
    transition-property: color;

    &:hover,
    &:active,
    &:focus,
    &[aria-current='true'] {
      background-color: var(--green);
      color: vars.$color-black;
      text-decoration: none;
      outline: none;
    }
  }



  /*  Elements
      ========================================================================= */

  .c-button__inner {
    display: inline-flex;
    align-items: stretch;
  }

  .c-button__label {
    display: flex;
    padding: vars.$space-small;
  }



  /*  Modifier
      ========================================================================= */

  .c-button--transparent {
    background-color: var(--transparent-green);
    color: vars.$color-white;
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
