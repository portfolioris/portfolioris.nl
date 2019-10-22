<script context="module">
  export async function preload({ path, query, params }) {
    const response = await this.fetch(`pages.json`);
    const pages = await response.json();
    return { pages };
  }
</script>

<script>
  export let pages;
</script>

index

<ul>
    {#each pages as item}
      <li>{item.text}</li>
    {/each}
</ul>
