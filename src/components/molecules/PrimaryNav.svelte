<script>
  import Button from "../atoms/Button.svelte";
  import Layout from "../atoms/objects/Layout.svelte";
  import Cell from "../atoms/objects/Cell.svelte";
  import { page } from "$app/state";
</script>

<nav aria-labelledby="nav-primary">
  <div class="u-visually-hidden" id="nav-primary">Primary</div>
  <Layout element="ul" gap="small" fit alignInline="center">
    {#each page.data.site.primaryNav as item}
      <Cell element="li">
        <Button
          isActive={page.url.pathname === `/${item.uri}`}
          modifier="transparent"
          label={item.label}
          href="/{item.uri === 'home' ? '' : item.uri}"
        />
      </Cell>
    {/each}
  </Layout>
</nav>

<style lang="scss">
  @use "@supple-kit/supple-css/utilities/visually-hidden";
</style>
