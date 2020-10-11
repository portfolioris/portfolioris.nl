<script>
  import Layer from '../atoms/objects/Layer.svelte';
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

<style lang="scss" type="text/scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  .c-header {
    background-color: vars.$color-black;
    padding: vars.$space-tiny;
    padding-block-end: 0;
    box-shadow: 0 0 vars.$space-small transparentize(vars.$color-black, 0.5);
  }

  .c-header__logo {
    margin-right: vars.$space-small;
    display: block;

    img {
      width: 52px;
      height: 52px;
      display: block;
      transition: filter vars.$base-transition-duration-short vars.$base-timing-function;
    }

    #{vars.$global-interaction-states} {
      img {
        filter: drop-shadow(0 0 vars.$space-tiny vars.$color-white);
      }
    }
  }

  .c-header__primary-nav {
    display: none;
  }

  @include responsive.mq(desk) {
    .c-header__toggle-foldout {
      display: none;
    }

    .c-header__primary-nav {
      display: block;
    }
  }
</style>

<header id="main-nav">
  <Retain size="full">
    <div class="c-header">
      <Layout align="middle">
        <Cell fit>
          <a href="/" class="c-header__logo">
            <img src="/assets/img/logo--portfolioris-small.svg" alt="Portfolioris" />
          </a>
        </Cell>
        <Cell fit align="center">
          <div class="c-header__primary-nav">
            <PrimaryNav items={items} activePage={activePage} />
          </div>
        </Cell>
        <Cell fit>
          <div class="c-header__toggle-foldout">
            <MenuToggle
              handleToggleMenu={handleToggleMenu}
              menuIsOpen={menuIsOpen}
            />
          </div>
        </Cell>
      </Layout>
    </div>
  </Retain>
</header>
