<script>
  export let level = 5;
  export let stylingLevel = null;
  export let text;
  export let href;
  export let noMargin = false;
  let stylingLevelClass = '';

  if (stylingLevel !== null) {
    stylingLevelClass = `h${stylingLevel}`;
  }
</script>

<style type="text/scss" lang="scss">
  .no-margin {
    margin-bottom: 0;
  }
</style>

{#if level === 1}
  <h1
    class={`${stylingLevelClass}`}
    class:no-margin={noMargin}
  >
      {#if href}
        <a href={href}>{text}</a>
      {:else}
          {text}
      {/if}
  </h1>
{/if}

{#if level === 2}
  <h2
    class={`${stylingLevelClass}`}
    class:no-margin={noMargin}
  >
      {#if href}
        <a href={href}>{text}</a>
      {:else}
          {text}
      {/if}
  </h2>
{/if}

{#if level === 3}
  <h3
    class={`${stylingLevelClass}`}
    class:no-margin={noMargin}
  >
      {#if href}
        <a href={href}>{text}</a>
      {:else}
          {text}
      {/if}
  </h3>
{/if}

{#if level === 4}
  <h4
    class={`${stylingLevelClass}`}
    class:no-margin={noMargin}
  >
      {#if href}
        <a href={href}>{text}</a>
      {:else}
          {text}
      {/if}
  </h4>
{/if}

{#if level === 5}
  <h5
    class={`${stylingLevelClass}`}
    class:no-margin={noMargin}
  >
      {#if href}
        <a href={href}>{text}</a>
      {:else}
          {text}
      {/if}
  </h5>
{/if}
