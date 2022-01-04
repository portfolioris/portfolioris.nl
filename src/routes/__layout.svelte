<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/nav.json');
    const navItems = await res.json();

    return {
      props: {
        navItems,
        // url,
      },
    };
  }
</script>
<script>
  import 'lazysizes';
  import 'wicg-inert';
  import { page } from '$app/stores';
  import Navigation from '../components/organisms/Navigation.svelte';

  export let navItems = [];
  // export let url;
  console.log($page);
  // let segment = '';
  $: segment = $page.url.pathname.split('/')[1];
</script>

<style global lang="scss">
    @use 'src/sass/leading';
</style>

<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
