<script context="module">
  export async function load({
    params,
    fetch,
  }) {
    const path = params.rest || 'home';
    const res = await fetch(`/${encodeURIComponent(path)}.json`);
    const data = await res.json();

    if (data.error) {
      return {
        status: data.error,
        error: new Error('not found'),
      };
    }

    return {
      props: {
        data,
      },
    };
  }
</script>

<script>
  import Meta from './_templates/$Meta.svelte';
  import ModularPageTemplate from './_templates/$ModularPageTemplate.svelte';
  import BlogTemplate from './_templates/$BlogTemplate.svelte';

  export let data;
</script>

<Meta {...data} />

{#if data.modules}
  <ModularPageTemplate {...data} />
{/if}

{#if data.template === 'blog'}
  <BlogTemplate {...data} />
{/if}
