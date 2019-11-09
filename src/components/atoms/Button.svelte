<script>
  // import { A, Button, Span } from 'svelte-elements';

  export let element = 'button';
  export let href = undefined;
  export let type = undefined;
  export let label;
  export let icon = null;
  export let hideLabel = false;
  export let modifier;
  export let isActive = false;

  // let renderElement = Button;
  //
  // if (element === 'a') {
  //   renderElement = A;
  // }
  //
  // if (element === 'span') {
  //   renderElement = Span;
  // }
</script>

<style lang="scss" type="text/scss">
  /*  =========================================================================
    Foundation.Atoms.Button
    ========================================================================= */
  /*  Imports
      ========================================================================= */
  @import "engine";



  /*  Variables
      ========================================================================= */

  // Config switches
  $c-button--transition-duration: $base-transition-duration-short !default;

  $c-button--states: "&:hover, &:active, &:focus, &.is-active" !default;

  $c-button--space: $supple-space !default;


  // Default settings
  $c-button--space-vertical: $supple-space-small !default;
  $c-button--space-horizontal: $supple-space-small !default;
  $c-button--icon-offset: $c-button--space !default;
  $c-button--icon-animation-offset: 10px !default;

  $c-button--color: $white !default;
  $c-button--background-color: $black !default;


  // variants
  $c-button--active-background-color: $green !default;

  $c-button--secondary-color: $gray-light !default;
  $c-button--secondary-active-color: $gray-light !default;

  $c-button--disabled-color: $gray-light !default;
  $c-button--disabled-background-color: $gray-light !default;



  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }



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
    background-color: $c-button--background-color;
    color: $c-button--color;
    appearance: none;
    transition-property: color, background-color;
    transition-duration: $c-button--transition-duration;
    transition-timing-function: linear;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus,
    &.is-active {
      background-color: $c-button--active-background-color;
      color: $c-button--color;
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
    padding-top: $c-button--space-vertical; /* [2] */
    padding-bottom: $c-button--space-vertical; /* [2] */
    padding-right: $c-button--space-horizontal; /* [2] */
    padding-left: $c-button--space-horizontal; /* [2] */
    line-height: 1;
  }

  .c-button__wrap-icon {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform $c-button--transition-duration $base-timing-function;
    background-color: $green;
    padding-top: $c-button--space-vertical; /* [2] */
    padding-bottom: $c-button--space-vertical; /* [2] */
    padding-right: $c-button--space-horizontal; /* [2] */
    padding-left: $c-button--space-horizontal; /* [2] */
    line-height: 1;
  }

  .c-button:disabled {
    background-color: $c-button--disabled-background-color !important;
    color: $c-button--disabled-color !important;
    cursor: not-allowed;
  }
</style>

<a
  href={href}
  type={type}
  class="c-button"
  class:is-active="{isActive}"
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
