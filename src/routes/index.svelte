<script context="module">
  export async function preload({ path, query, params }) {
    const res = await this.fetch(`[slug].json`);
    return await res.json();
  }
</script>

<script>
    import ModularPageTemplate from '../components/ModularPageTemplate.svelte';
    export let attributes;
</script>

<svelte:head>
    <title>{attributes.title}</title>
</svelte:head>

<ModularPageTemplate modules={attributes.modules}></ModularPageTemplate>
