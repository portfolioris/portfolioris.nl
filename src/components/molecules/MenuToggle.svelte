<script>
  export let handleToggleMenu;
  export let menuIsOpen;
</script>

<style lang="scss" type="text/scss">
  @use 'src/sass/vars';

  .c-menu-toggle {
    padding: vars.$space-tiny;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: vars.$color-white;
    line-height: 1;
    border-radius: 50%;
    transition: vars.$base-transition-duration vars.$base-timing-function;
    transition-property: color, background-color;

    &.is-open {
      text-decoration: none;

      .c-menu-toggle__dash--middle {
        transform: scaleX(0);
      }

      .c-menu-toggle__dash--top {
        transform: translate(-4.5px, 4.5px) rotate(45deg);
      }

      .c-menu-toggle__dash--bottom {
        transform: translate(-4.5px, -4.5px) rotate(-45deg);
      }
    }

    &:focus-visible {
      color: vars.$color-black;
      background-color: vars.$color-white;
    }

    &:-moz-focusring {
      color: vars.$color-black;
      background-color: vars.$color-white;
    }
  }

  .c-menu-toggle__icon {
    height: 1em;
    width: 1em;
    overflow: visible;
  }

  .c-menu-toggle__dash {
    transition: transform vars.$base-transition-duration vars.$base-timing-function;
    transform-origin: center;
  }

  .c-menu-toggle__label {
    font-size: 10px;
    display: block;
  }
</style>

<a
  href="#navigation"
  class="c-menu-toggle"
  class:is-open={menuIsOpen}
  on:click={handleToggleMenu}
>
  <svg viewBox="0 0 24 24" class="c-menu-toggle__icon">
    <defs>
      <path id="l" d="M0,0 L24,0" />
    </defs>
    <g fill="none" stroke="currentColor" stroke-width="2">
      <use xlink:href="#l" class="c-menu-toggle__dash  c-menu-toggle__dash--top" y="6" />
      <use xlink:href="#l" class="c-menu-toggle__dash  c-menu-toggle__dash--middle" y="12" />
      <use xlink:href="#l" class="c-menu-toggle__dash  c-menu-toggle__dash--bottom" y="18" />
    </g>
  </svg>
  <span class="c-menu-toggle__label">
    menu
  </span>
</a>
