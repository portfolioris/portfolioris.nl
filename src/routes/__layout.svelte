<script context="module">
  export async function load({ fetch, url }) {
    const res = await fetch('/nav.json');
    const navItems = await res.json();

    return {
      props: {
        navItems,
        url,
      },
    };
  }
</script>
<script>
  import 'lazysizes';
  import 'wicg-inert';
  import Navigation from '../components/organisms/Navigation.svelte';

  export let navItems = [];
  export let url;
  $: segment = url.pathname.split('/')[1];
</script>

<style global lang="scss">
    @use 'src/sass/leading';
</style>

<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
