<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`pages.json`);
    if (response.ok) {
      const md = await response.json();
      return { md };
    } else {
      return this.error(response.statusCode, 'boo');
    }
  }
</script>

<script>
  export let md; // = 'foo';
</script>

index
{md}
