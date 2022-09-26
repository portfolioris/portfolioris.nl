<script>
  import 'lazysizes';
  import 'wicg-inert';
  import { page } from '$app/stores';
  import Navigation from '../components/organisms/Navigation.svelte';

  export let data;
  $: segment = $page.url.pathname.split('/')[1];
</script>

<style global lang="scss">
  @use 'src/sass/leading';
</style>

<Navigation items="{data.siteData.primaryNav}" activePage="{segment}">
  <slot></slot>
</Navigation>
