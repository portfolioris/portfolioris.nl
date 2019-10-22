<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`pages.json`);
    if (response.ok) {
      const md = await response.json();
      return { md };
    } else {
      return this.error(response.statusCode, 'boo')
    }
  }
</script>

<script>
  export let segment;
  console.log(segment);
  export let md;
  const items = md;
  import Navigation from '../components/organisms/Navigation.svelte';
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation items="{items}" activePage="{segment}">
  <slot></slot>
</Navigation>
