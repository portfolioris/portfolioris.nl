<script>
  export let href = null;
  export let type = null;
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
    border: none;
    box-shadow: 0 0 0 1px var(--color-black);
    border-radius: 0;
    font-family: var(--font-family-secondary);
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--color-green); // $green; // $c-button--background-color;
    color: var(--color-black); // $c-button--color;
    appearance: none;
    transition: var(--base-transition-duration-short) var(--base-timing-function);
    transition-property: background-color, box-shadow;

    #{vars.$global-interaction-states},
    &[aria-current='true'] {
      background-color: var(--color-green);
      color: var(--color-black);
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
    padding: var(--space-small);
  }



  /*  Modifier
      ========================================================================= */

  .c-button--transparent {
    box-shadow: none;
    background-color: var(--transparent-green);
    color: var(--color-foreground);

    #{vars.$global-interaction-states},
    &[aria-current='true'] {
      box-shadow: 0 0 0 1px var(--color-black);
    }
  }
</style>



<a
  href={href}
  type={type}
  class="c-button  {className}"
  aria-current={isActive ? 'true' : null}
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
