<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`allPages.json`);
    const pages = await response.json();
    return { pages };
  }
</script>

<script>
  export let segment;
  export let pages;
  import Navigation from '../components/organisms/Navigation.svelte';
  import 'highlight.js/styles/github.css';
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation items="{pages}" activePage="{segment}">
  <slot></slot>
</Navigation>
