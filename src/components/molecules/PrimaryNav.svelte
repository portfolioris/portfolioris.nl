<script>
  import Button from '../atoms/Button.svelte';

  export let items;
  export let activePage;
  let foo;
</script>

<nav>
  <ul class="o-layout  o-layout--gutter-small  o-layout--inline  u-m-b-none">
      {#each items as item}
        <li class="o-layout__cell  o-layout__cell--fit">
          <Button
            element="a"
            isActive="{activePage === item.href}"
            modifier="transparent"
            label="{item.text}"
            href="{item.href}"
          />
        </li>
      {/each}
  </ul>
</nav>
