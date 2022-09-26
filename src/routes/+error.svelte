<script>
  import { page } from '$app/stores';
  import Layer from '../components/atoms/objects/Layer.svelte';
  import Retain from '../components/atoms/objects/Retain.svelte';

  export let data;
</script>
<svelte:head>
  <title>{$page.status}: {$page.error.message} • {data.siteData.siteName}</title>
</svelte:head>

<Layer>
  <Retain size="desk">
    <h1>{$page.status}: {$page.error.message}</h1>
  </Retain>
</Layer>
