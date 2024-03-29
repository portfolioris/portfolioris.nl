<script>
  // not listing svelte as devdep results in a build error
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { onMount } from 'svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Button from '../atoms/Button.svelte';
  import { getKeyCode } from '../../utils/utilities';

  let isLoaded = false;
  let menuIsOpen = false;
  export let activePage;
  export let items = [];

  onMount(() => {
    isLoaded = true;
  });

  let handleEscape;

  const openMenu = () => {
    menuIsOpen = true;
    document.addEventListener('keyup', handleEscape);
  };

  const closeMenu = () => {
    menuIsOpen = false;
    document.removeEventListener('keyup', handleEscape);
  };

  handleEscape = (e) => {
    const keyCode = getKeyCode(e);
    if (keyCode === 'esc' || keyCode === 'escape') {
      closeMenu();
    }
  };

  function toggleMenu() {
    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  /*  Page wrappers
      ========================================================================= */

  main {
    max-width: 1920px;
    margin: auto;
  }

  :global(.c-body__skip-link) {
    position: absolute;
    z-index: 2;
    transform: translateX(-100%);

    &:focus {
      transform: none;
    }
  }

  .c-body-wrap {
    overflow: hidden;
  }

  .c-body-wrap__header {
    background-color: var(--color-background);
    position: relative;
    z-index: 2;
  }

  .c-body-wrap__main {
    transition: translate var(--base-transition-duration) var(--base-timing-function);
    position: relative;
    z-index: 1;
    background-color: var(--color-background);

    &.is-open {
      // 100% - base*3 - tiny, this is correct
      translate: calc(100% - var(--space-base) * 3 - var(--space-tiny));
    }
  }

  .c-body-wrap__navigation {
    inset-inline: 0 var(--space-large);
    inset-block: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding-block-start: calc(var(--space-base) * 3);
    transition: transform var(--base-transition-duration) var(--base-timing-function);
    position: absolute;
    transform: translateX(-50%);

    &.is-open {
      transform: none;
    }
  }

  .c-body-wrap__nav-list {
    list-style: none;
    padding-inline-start: 0;
  }

  .c-body-wrap__nav-item {
    margin-bottom: var(--space-tiny);
  }


  /*  Responsive
      ========================================================================= */

  @include responsive.mq(desk) {
    .c-body-wrap__navigation {
      display: none;
    }
  }

</style>

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
      handleToggleMenu={toggleMenu}
      menuIsOpen={menuIsOpen}
    />
  </div>
  <div
    class="c-body-wrap__main"
    class:is-open={menuIsOpen}
    inert={menuIsOpen ? true : null}
  >
    <main id="main">
      <slot />
    </main>
    <Footer />
  </div>
  <div
    class="c-body-wrap__navigation"
    class:is-open={menuIsOpen}
    id="navigation"
    inert={menuIsOpen ? null : true}
  >
    <Retain>
      <ul class="c-body-wrap__nav-list">
        {#each items as item}
          <li class="c-body-wrap__nav-item">
            <Button
              isActive="{activePage === item.uri}"
              label="{item.label}"
              href="/{item.uri === 'home' ? '' : item.uri}"
              onClick={() => { menuIsOpen = false; }}
            />
          </li>
        {/each}
      </ul>
    </Retain>
  </div>
</div>
