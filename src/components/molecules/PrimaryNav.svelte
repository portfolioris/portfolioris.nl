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
            isActive="{activePage === item.slug}"
            modifier="transparent"
            label="{item.data.title}"
            href="{item.slug}"
          />
        </li>
      {/each}
  </ul>
</nav>
