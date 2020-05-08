<script context="module">
  export async function preload() {
    const res = await this.fetch('nav.json');
    const data = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Navigation from '../components/organisms/Navigation.svelte';

  export let segment;
  export let navItems = [];
</script>

<style global lang="scss">
  @import 'leading';
</style>

<svelte:head>
  <meta name="twitter:card" content="summary">
</svelte:head>

<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
