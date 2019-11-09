<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`allPages.json`);
    const pages = await response.json();
    return { pages };
  }
</script>

<script>
  // import { writable } from 'svelte/store';
  // export const count = writable(0);
  import Navigation from '../components/organisms/Navigation.svelte';
  import 'highlight.js/styles/github.css';

  export let segment;
  export let pages;

  import { pageStore } from './../pageStore.js';
  pageStore.set(pages);
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation items="{pages}" activePage="{segment}">
  <slot></slot>
</Navigation>
