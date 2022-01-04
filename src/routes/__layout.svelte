<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/nav.json');
    const navItems = await res.json();

    return {
      props: {
        navItems,
      },
    };
  }
</script>
<script>
  import 'lazysizes';
  import 'wicg-inert';
  import Navigation from '../components/organisms/Navigation.svelte';
  import { page } from '$app/stores';

  // eslint-disable-next-line prefer-destructuring
  $: segment = $page.url.pathname.split('/')[1];

  export let navItems = [];
</script>

<style global lang="scss">
    @use 'src/sass/leading';
</style>

<!--
<svelte:head>
  <meta name="twitter:card" content="summary">
</svelte:head>
-->

<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
