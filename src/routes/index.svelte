<script context="module">
  export async function preload() {
    const res = await this.fetch('home.json');
    const data = await res.json();
    if (res.status === 200) {
      return { data };
    }
    return this.error(res.status, data.message);
  }
</script>

<script>
  import Rest from './[...rest].svelte';

  export let data;
</script>

<Rest data={data} />
