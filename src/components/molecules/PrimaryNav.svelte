<script>
  import Button from '../atoms/Button.svelte';
  import Layout from '../atoms/objects/Layout.svelte';

  export let items = [];
  export let activePage = null;
</script>

<nav aria-labelledby="nav-primary">
  <div class="u-visually-hidden" id="nav-primary">Primary</div>
  <Layout element="ul" gap="small" fit>
      {#each items as item}
        <li>
          <Button
            isActive="{activePage === item.uri}"
            modifier="transparent"
            label="{item.label}"
            href="{item.uri === 'home' ? '/' : item.uri}"
          />
        </li>
      {/each}
  </Layout>
</nav>
