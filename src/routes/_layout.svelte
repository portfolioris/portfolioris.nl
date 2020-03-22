<script context="module">
  import { gql } from 'apollo-boost';
  import { client } from '../apollo';

  const MAIN_NAV = gql`{
    navItems: entries(section: mainNavigation) {
      ... on MainNavigation {
        title
        menuItem {
          uri
        }
      }
    }
  }`;

  export async function preload() {
    return { cache: await client.query({ query: MAIN_NAV }) };
  }
</script>

<script>
  // import { setClient, restore, query } from 'svelte-apollo';
  export let cache;
  // restore(client, MAIN_NAV, cache.data);
  // setClient(client);

  import Navigation from '../components/organisms/Navigation.svelte';
  import 'highlight.js/styles/github.css';

  export let segment;
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>

<Navigation items="{cache.data.navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
