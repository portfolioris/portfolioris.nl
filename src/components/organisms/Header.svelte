<script>
  import Retain from '../atoms/objects/Retain.svelte';
  import PrimaryNav from '../molecules/PrimaryNav.svelte';
  import MenuToggle from '../molecules/MenuToggle.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let menuIsOpen = false;
  export let handleToggleMenu;
  export let items;
  export let activePage;
</script>

<style lang="scss">
  @use 'src/sass/generic/utilities';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  .c-header {
    padding-block-start: var(--space-tiny);
    padding-inline: var(--space-tiny);
  }

  .c-header__logo {
    display: block;

    img {
      width: 52px;
      height: 52px;
      display: block;
      transition: filter var(--base-transition-duration-short) var(--base-timing-function);
    }

    #{utilities.$global-interaction-states} {
      img {
        filter: drop-shadow(0 0 var(--space-tiny) var(--color-white));
      }
    }
  }

  .c-header__primary-nav {
    display: none;
  }

  @include responsive.mq(desk) {
    .c-header {
      padding-inline-start: 0;
      padding-inline-end: 0;
    }

    .c-header__toggle-foldout {
      display: none;
    }

    .c-header__primary-nav {
      display: flex;
      justify-content: center;
    }
  }
</style>

<header id="main-nav">
  <Retain size="wall" noPadding>
    <div class="c-header">
      <Layout alignInline="middle" fit gap="base">
        <a href="/" class="c-header__logo">
          <img src="/assets/img/logo--portfolioris-small.svg" alt="Portfolioris" />
        </a>

        <Cell fill align="center">
          <div class="c-header__primary-nav">
            <PrimaryNav items={items} activePage={activePage} />
          </div>
        </Cell>
        <div class="c-header__toggle-foldout">
          <MenuToggle
            handleToggleMenu={handleToggleMenu}
            menuIsOpen={menuIsOpen}
          />
        </div>
      </Layout>
    </div>
  </Retain>
</header>
