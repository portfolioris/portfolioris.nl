<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`${params.rest.join('/')}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ModularPageTemplate from './_templates/_ModularPageTemplate.svelte';
  import BlogTemplate from './_templates/_BlogTemplate.svelte';
  export let data;
</script>

{#if data.template === 'modular'}
  <ModularPageTemplate {...data} />
{/if}

{#if data.template === 'item'}
  <BlogTemplate {...data} />
{/if}
