<script>
  export let level = 5;
  export let text;
  export let href = null;
</script>

{#if level === 1}
  <h1>
    {#if href}
      <a href={href}>{text}</a>
    {:else}
      {text}
    {/if}
  </h1>
{/if}

{#if level === 2}
  <h2>
    {#if href}
      <a href={href}>{text}</a>
    {:else}
      {text}
    {/if}
  </h2>
{/if}

{#if level === 3}
  <h3>
    {#if href}
      <a href={href}>{text}</a>
    {:else}
      {text}
    {/if}
  </h3>
{/if}

{#if level === 4}
  <h4>
    {#if href}
      <a href={href}>{text}</a>
    {:else}
      {text}
    {/if}
  </h4>
{/if}

{#if level === 5}
  <h5>
    {#if href}
      <a href={href}>{text}</a>
    {:else}
      {text}
    {/if}
  </h5>
{/if}
