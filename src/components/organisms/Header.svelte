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
  @import 'engine';

  .c-header {
    background-color: $black;
    padding: $supple-space-tiny;
    box-shadow: 0 0 $supple-space-small transparentize($black, 0.5);
  }

  .c-header__logo {
    margin-right: $supple-space-small;
    display: block;

    img {
      width: 52px;
      height: 52px;
      display: block;
      transition: filter $base-transition-duration-short $base-timing-function;
    }

    #{$global-interaction-states} {
      img {
        filter: drop-shadow(0 0 $supple-space-tiny $white);
      }
    }
  }

  .c-header__primary-nav {
    display: none;
  }

  @include supple-mq(desk) {
    .c-header__toggle-foldout {
      display: none;
    }

    .c-header__primary-nav {
      display: block;
    }
  }
</style>

<header id="main-nav">
  <Layer size="flat">
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
  </Layer>
</header>
