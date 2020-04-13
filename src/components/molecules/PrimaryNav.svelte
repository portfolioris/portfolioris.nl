<script>
  import Button from '../atoms/Button.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let items;
  export let activePage;
</script>

<nav aria-labelledby="nav-primary">
  <div class="u-visually-hidden" id="nav-primary">Primary</div>
  <Layout element="ul" gutter="small" margin="none">
      {#each items as item}
        <Cell element="li" fit>
          <Button
            element="a"
            isActive="{activePage === item.menuItem[0].uri}"
            modifier="transparent"
            label="{item.title}"
            href="{item.menuItem[0].uri === '__home__' ? '' : item.menuItem[0].uri}/"
          />
        </Cell>
      {/each}
  </Layout>
</nav>
