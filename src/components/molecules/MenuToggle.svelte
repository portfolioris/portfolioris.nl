<script>
  let handleClickToggleMenu;
</script>

<a
  href="#navigation"
  class="c-menu-toggle  [is-open]"
  on:click={handleClickToggleMenu}
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
