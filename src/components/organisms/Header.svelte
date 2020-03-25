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
  @import "engine";

  .c-header {
    background-color: $black;
    padding: $supple-space-tiny;
    box-shadow: 0 0 $supple-space-small transparentize($black, 0.5);
  }

  .c-header__logo {
    margin-right: $supple-space-small;
    margin-bottom: $supple-space-base;
    width: 52px;
    height: 52px;
    display: block;
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

<header>
  <Layer size="flat">
    <Retain size="full">
      <div class="c-header">
        <Layout align="middle">
          <Cell fit>
            <a href="/">
              <img src="/assets/img/logo--portfolioris-small.svg" alt="Portfolioris"
                   class="c-header__logo" />
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
