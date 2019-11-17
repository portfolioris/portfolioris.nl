<script context="module">
  export async function preload({ params, query }) {
    console.log(params.slug, params.slug2);

    const res = await this.fetch(`${params.slug}.json`);

    if (res.status === 200) {
      return await res.json();
    }

    this.error(404, 'Nee2');
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<h1>{data.title}</h1>
