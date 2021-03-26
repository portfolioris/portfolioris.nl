<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('nav.json');
    const navItems = await res.json();

    if (res.ok) {
      return {
        props: {
          navItems,
        },
      };
    }
  }
</script>

<script>
  import 'wicg-inert';
  import Navigation from '../components/organisms/Navigation.svelte';

  export let segment;
  export let navItems = [];
</script>

<style global type="text/scss" lang="scss">
    @use 'src/sass/leading';
</style>

<svelte:head>
  <meta name="twitter:card" content="summary">
</svelte:head>

<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
