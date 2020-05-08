<script>
  import { onMount } from 'svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Header from '../organisms/Header.svelte';
  import Footer from '../organisms/Footer.svelte';
  import Button from '../atoms/Button.svelte';

  let isLoaded = false;
  let menuIsOpen = false;
  export let activePage;
  export let items = [];

  onMount(() => {
    isLoaded = true;
  });

  function closeMenu() {
    menuIsOpen = false;
  }

  function handleToggleMenu(e) {
    e.preventDefault();
    menuIsOpen = !menuIsOpen;
  }
</script>

<style lang="scss" type="text/scss">
  @import 'engine';

  /*  Page wrappers
      ========================================================================= */

  main {
    max-width: 1920px;
    margin: auto;
  }

  :global(.c-body__skip-link) {
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
  }

  :global(.c-body__skip-link:focus) {
    transform: none;
  }

  .c-body-wrap {
    overflow: hidden;
  }

  .c-body-wrap__header {
    position: relative;
    z-index: 1;
  }

  .c-body-wrap__main {
    transition: transform $base-transition-duration $base-timing-function;
    position: relative;
    z-index: 1;

    &.is-open {
      transform: translateX(calc(100% - #{$supple-space-base * 3 - $supple-space-tiny}));
    }
  }

  .c-body-wrap__navigation {
    left: 0;
    top: 0;
    right: $supple-space-large;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding-top: $supple-space-base * 3;
    transition: transform $base-transition-duration $base-timing-function;

    &.is-loaded {
      position: absolute;
      transform: translateX(-50%);
    }

    &.is-open {
      transform: none;
    }
  }

  .c-body-wrap__nav-list {
    list-style: none;
    margin-left: 0;
  }

  .c-body-wrap__nav-item {
    margin-bottom: $supple-space-tiny;
  }



  /*  Responsive
      ========================================================================= */

  @include supple-mq(desk) {
    .c-body-wrap__navigation {
      display: none;
    }
  }

</style>

<Button
  href="#main-nav"
  label="Jump to main navigation"
  class="c-body__skip-link"
/>

<Button
  href="#main"
  label="Jump to content"
  class="c-body__skip-link"
/>



<div class="c-body-wrap">
  <div class="c-body-wrap__header">
    <Header
      items={items}
      activePage={activePage}
      handleToggleMenu={handleToggleMenu}
      menuIsOpen={menuIsOpen}
    />
  </div>
  <div
    class="c-body-wrap__main"
    class:is-open={menuIsOpen}
  >
    <main id="main">
      <slot />
    </main>
    <Footer />
  </div>
  <div
    class="c-body-wrap__navigation"
    class:is-loaded={isLoaded}
    class:is-open={menuIsOpen}
    id="navigation"
  >
    <Retain>
      <ul class="c-body-wrap__nav-list">
          {#each items as item}
            <li class="c-body-wrap__nav-item">
              <Button
                element="a"
                isActive="{activePage === item.menuItem[0].uri}"
                label="{item.title}"
                href="{item.menuItem[0].uri === '__home__' ? '' : item.menuItem[0].uri}"
                onClick={closeMenu}
              />
            </li>
          {/each}
      </ul>
    </Retain>
  </div>
</div>
