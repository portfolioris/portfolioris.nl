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
            isActive="{activePage === item.link}"
            modifier="transparent"
            label="{item.label}"
            href="{item.link === '/home' ? '' : item.link}"
          />
        </Cell>
      {/each}
  </Layout>
</nav>
