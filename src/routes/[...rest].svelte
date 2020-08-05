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
  import Meta from './_templates/_Meta.svelte';
  import ModularPageTemplate from './_templates/_ModularPageTemplate.svelte';
  import BlogTemplate from './_templates/_BlogTemplate.svelte';
  export let data;
  console.log(data);
</script>

<Meta {...data} />

{#if data.modules}
  <ModularPageTemplate {...data} />
{/if}

{#if data.template === 'item'}
  <BlogTemplate {...data} />
{/if}
