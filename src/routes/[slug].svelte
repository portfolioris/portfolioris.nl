<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.slug}.json`);

    if (res.status === 200) {
      return await res.json();
    }

    this.error(404, 'Not found');
  }
</script>

<script>
  import ModularPageTemplate from '../components/ModularPageTemplate.svelte';
  export let attributes;
</script>

<svelte:head>
  <title>{attributes.title}</title>
</svelte:head>

{#if attributes.pageType === 'modularPage'}
    <ModularPageTemplate modules={attributes.modules} />
{/if}
