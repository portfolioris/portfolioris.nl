<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`allPages.json`);
    const pages = await response.json();
    const response2 = await this.fetch(`allBlogs.json`);
    const blogs = await response2.json();
    return { pages, blogs };
  }
</script>

<script>
  import Navigation from '../components/organisms/Navigation.svelte';
  import 'highlight.js/styles/github.css';

  export let segment;
  export let pages = [];
  export let blogs = [];

  import { pageStore } from './../pageStore.js';
  pageStore.set(pages);
  import { blogStore } from './../pageStore.js';
  blogStore.set(blogs);
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation items="{pages}" activePage="{segment}">
  <slot></slot>
</Navigation>
