<script context="module">
  export async function preload({ path, query, params }) {
    const res = await this.fetch(`[slug].json`);
    return await res.json();
  }
</script>

<script>
    import ModularPageTemplate from '../routes/_ModularPageTemplate.svelte';
    export let title;
    export let modules;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if modules}
<ModularPageTemplate modules={modules}></ModularPageTemplate>
{/if}
