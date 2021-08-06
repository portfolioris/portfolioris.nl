<script>
  import marked from 'marked';
  import Flow from '../objects/Flow.svelte';

  export let modifier = null;
  export let markdown = null;
</script>

<style type="text/scss" lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  :global(a) {
    color: var(--green);
    font-weight: vars.$font-weight-bold;

    #{vars.$global-interaction-states} {
      color: var(--color-foreground);
    }

    @media (prefers-color-scheme: light) {
      color: vars.$color-black;
    }
  }

  .intro {
    font-weight: vars.$font-weight-bold;
  }

  .byline {
    @include typography.font-size(vars.$micro);
  }
</style>

<div
  class:intro={modifier === 'intro'}
  class:byline={modifier === 'byline'}
>
  <Flow>
    {#if markdown}
      {@html marked(markdown)}
    {:else}
      <slot />
    {/if}
  </Flow>
</div>
