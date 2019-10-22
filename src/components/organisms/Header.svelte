<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import PrimaryNav from '../molecules/PrimaryNav.svelte';
  import MenuToggle from '../molecules/MenuToggle.svelte';

  export let menuIsOpen = false;
  export let handleToggleMenu;
  export let items;
  export let activePage;
</script>

<style lang="scss" type="text/scss">
  @import "engine";



  /*  Module
      ========================================================================= */

  .c-header {
    background-color: $black;
    padding: $supple-space-tiny;
    box-shadow: 0 0 $supple-space-small transparentize($black, 0.5);
  }

  .c-header__logo {
    margin-right: $supple-space-small;
    width: 52px;
    height: 52px;
    display: block;
  }
</style>

<header>
  <Layer
    size="flat"
  >
    <Retain
      size="full"
    >
      <div class="c-header">
        <div class="o-layout  o-layout--align-middle">
          <div class="o-layout__cell  o-layout__cell--fill">
            <div class="o-layout  o-layout--align-middle">
              <div class="o-layout__cell  o-layout__cell--fit">
                <a href="/">
                  <img src="/assets/img/logo--portfolioris-small.svg" alt="Portfolioris" class="c-header__logo" />
                  <span class="u-visually-hidden">Portfolioris</span>
                </a>
              </div>
              <div class="o-layout__cell  o-layout__cell--fit  o-layout__cell--center">
                <div class="u-hidden@until-desk">
                  <PrimaryNav {items} activePage={activePage} />
                </div>
              </div>
            </div>
          </div>
          <div class="o-layout__cell  o-layout__cell--fit  u-hidden@from-desk">
            <MenuToggle
              handleToggleMenu={handleToggleMenu}
              menuIsOpen={menuIsOpen}
            />
          </div>
        </div>
      </div>
    </Retain>
  </Layer>
</header>
