<script>
  import Retain from '../atoms/objects/Retain.svelte';
  import Header from '../organisms/Header.svelte';
  import Footer from '../organisms/Footer.svelte';
  import Button from '../atoms/Button.svelte';

  let menuIsOpen = false;
  let items = [];
  let activePageId = 0;
  let handleToggleMenu;

  function closeMenu() {
    menuIsOpen = false;
  }
</script>

<div class="c-body-wrap">
  <div class="c-body-wrap__header">
    <Header
      items={items}
      activePageId={activePageId}
      handleToggleMenu={handleToggleMenu}
      menuIsOpen={menuIsOpen}
    />
  </div>
  <div class="c-body-wrap__main  [is-open]">
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
  <div class="c-body-wrap__navigation [is-loaded  is-open]" id="navigation">
    <Retain>
      <ul class="o-list-bare">
          {#each items as item}
            <li class="u-m-b-tiny">
              <Button
                text={item.title}
                href="{item.uri}"
                on:click="{() => closeMenu}"
              />
            </li>
          {/each}
      </ul>
    </Retain>
  </div>
</div>
