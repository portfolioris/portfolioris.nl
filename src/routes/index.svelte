<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`home.json`);
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
  console.log(data.children);
</script>

<ModularPageTemplate uri="/" {...data} />

