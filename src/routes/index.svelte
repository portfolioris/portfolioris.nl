<script context="module">
  export async function preload({ path, query, params }) {
    const res = await this.fetch(`[slug].json`);
    return await res.json();
  }
</script>

<script>
    import ModularPageTemplate from '../components/ModularPageTemplate.svelte';
    export let data;
    export let parsedContent;
</script>

<ModularPageTemplate modules={data.modules}></ModularPageTemplate>

{@html parsedContent}
