<script context="module">
  export async function preload({ host, path, params, query }) {
    console.log(host, path, params, query);
    const res = await this.fetch(`${params.slug}.json`);

    if (res.status === 200) {
      return await res.json();
    }

    this.error(404, 'Not found');
  }
</script>

<script>
  import ModularPageTemplate from '../routes/_ModularPageTemplate.svelte';
  export let attributes;
  export let section = {};
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if section.handle === 'modularPage'}
    <ModularPageTemplate modules={attributes.modules} />
{/if}
