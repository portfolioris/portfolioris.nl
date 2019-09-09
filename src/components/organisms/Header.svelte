<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import PrimaryNav from '../molecules/PrimaryNav.svelte';
  import MenuToggle from '../molecules/MenuToggle.svelte';

  let menuIsOpen = false;
  let handleClickToggleMenu;
  let items;
  let activePageId;
</script>

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
                  <img src="/img/logo--portfolioris-small.svg" alt="Portfolioris" class="c-header__logo" />
                  <span class="u-visually-hidden">Portfolioris</span>
                </a>
              </div>
              <div class="o-layout__cell  o-layout__cell--fit  o-layout__cell--center">
                <div class="u-hidden@until-desk">
                  <PrimaryNav items={items} activePageId={activePageId} />
                </div>
              </div>
            </div>
          </div>
          <div class="o-layout__cell  o-layout__cell--fit  u-hidden@from-desk">
            <MenuToggle
              handleToggleMenu={handleClickToggleMenu}
              isOpen={menuIsOpen}
            />
          </div>
        </div>
      </div>
    </Retain>
  </Layer>
</header>
