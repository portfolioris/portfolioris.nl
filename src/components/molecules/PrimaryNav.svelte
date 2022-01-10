<script>
  import Button from '../atoms/Button.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let items = [];
  export let activePage = null;
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden';
</style>

<nav aria-labelledby="nav-primary">
  <div class="u-visually-hidden" id="nav-primary">Primary</div>
  <Layout element="ul" gap="small" fit alignInline="center">
      {#each items as item}
        <Cell element="li">
          <Button
            isActive="{activePage === item.uri}"
            modifier="transparent"
            label="{item.label}"
            href="/{item.uri === 'home' ? '' : item.uri}"
          />
        </Cell>
      {/each}
  </Layout>
</nav>
