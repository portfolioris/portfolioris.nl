<script context="module">
  export async function load({
    fetch,
    error,
    status,
  }) {
    const res = await fetch('/home.json');
    const data = await res.json();

    return {
      props: {
        data,
        error,
        status,
      },
    };
  }
</script>

<script>
  import Meta from './_templates/$Meta.svelte';
  import Layer from '../components/atoms/objects/Layer.svelte';
  import Retain from '../components/atoms/objects/Retain.svelte';

  export let status;
  export let error;
  export let data;

  const dev = process.env.NODE_ENV === 'development';
</script>

<Meta {...data} />

<svelte:head>
  <title>{status}: {error.message} • {data.site.siteName}</title>
</svelte:head>

<Layer size="large">
  <Retain size="lap">
    <h1>{status}: {error.message}</h1>
  </Retain>
</Layer>


{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
