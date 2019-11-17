<script context="module">
  export async function preload({ host, path, params, query }) {
    const res = await this.fetch(`${params.rest.join(',')}.json`);
    if (res.status === 200) {
      return await res.json();
    }

    this.error(404, 'Not found');
  }
</script>

rest?
