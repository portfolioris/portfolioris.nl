<script context="module">
  export async function load({
    page,
    fetch,
  }) {
    const res = await fetch(`/${page.params.rest.replace('/', '|')}.json`);
    const data = await res.json();

    if (res.ok) {
      return {
        props: {
          data,
        },
      };
    }
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
