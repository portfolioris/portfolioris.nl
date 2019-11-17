<script>
  import Button from '../atoms/Button.svelte';

  export let items;
  export let activePage;
</script>

<nav>
  <ul class="o-layout  o-layout--gutter-small  o-layout--inline  u-m-b-none">
      {#each items as item}
        <li class="o-layout__cell  o-layout__cell--fit">
          <Button
            element="a"
            isActive="{activePage === item.menuItem[0].uri}"
            modifier="transparent"
            label="{item.title}"
            href="{item.menuItem[0].uri === '__home__' ? '/' : item.menuItem[0].uri}"
          />
        </li>
      {/each}
  </ul>
</nav>
