<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.slug}.json`);

    if (res.status === 200) {
      return await res.json();
    }

    this.error(404, 'Nee');
  }
</script>

<script>
  import ModularPageTemplate from '../components/ModularPageTemplate.svelte';
  export let data;
  export let parsedContent;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

{#if data.pageType === 'modularPage'}
    <ModularPageTemplate modules={data.modules} />
{/if}

{@html parsedContent}

