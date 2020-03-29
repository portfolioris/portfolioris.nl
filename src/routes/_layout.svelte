<script context="module">
  export async function preload() {
    const res = await this.fetch('layout.json');
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
  export let globals;

  import { globalsStore } from './stores.js';
  globalsStore.set(globals);
</script>

<style global lang="scss">
  @import "../sass/leading.scss";
</style>



<Navigation items="{navItems}" activePage="{segment}">
  <slot></slot>
</Navigation>
