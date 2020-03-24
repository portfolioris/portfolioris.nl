<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`${params.rest}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ModularPageTemplate from './_ModularPageTemplate.svelte';
  export let data;
</script>

<ModularPageTemplate {...data} />

