<script context="module">
  import { gql } from "apollo-boost";
  import { client } from '../apollo';

  const ARTICLES = gql`
    {
      entries(section: mainNavigation) {
        ... on MainNavigation {
          id
          title
          menuItem {
            uri
          }
        }
      }
    }
  `;

  export async function preload() {
    return {
      pages: await client.query({ query: ARTICLES })
    };
    const response = await this.fetch(`allPages.json`);
    const pages2 = await response.json();
    const response2 = await this.fetch(`allBlogs.json`);
    const blogs2 = await response2.json();
    return { pages2, blogs2 };
  }
</script>

<script>
  // import { setClient, restore } from 'svelte-apollo';
  // export let pages;
  // console.log(pages);
  // restore(client, ARTICLES, cache.data);
  // setClient(client);

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

<Navigation items="{pages.data.entries}" activePage="{segment}">
  <slot></slot>
</Navigation>
