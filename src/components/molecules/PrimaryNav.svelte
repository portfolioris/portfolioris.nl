<script>
  import Button from '../atoms/Button.svelte';

  let items = [];
</script>

<nav>
  <ul class="o-layout  o-layout--gutter-small  o-layout--inline  u-m-b-none">
      {#each items as item}
        <li class="o-layout__cell  o-layout__cell--fit">
          <Button
            modifier="transparent"
            text="{item.title}"
            href="{item.href}"
          />
        </li>
      {/each}
  </ul>
</nav>
