<script>
  import marked from 'marked';
  import Flow from '../objects/Flow.svelte';

  export let modifier = null;
  export let markdown = null;
</script>

<style type="text/scss" lang="scss">
  @use 'sass:math';
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  :global {
    th {
      @include typography.font-size(18px);
      text-align: start;
    }

    td {
      padding-block: calc(var(--space-tiny) / 2);
      vertical-align: top;
      max-inline-size: 40ch;
    }

    th + th,
    td + td {
      padding-inline-start: var(--space-small);
    }
  }

  :global(a) {
    color: var(--color-green);
    font-weight: var(--font-weight-bold);

    #{vars.$global-interaction-states} {
      color: var(--color-foreground);
    }

    @media (prefers-color-scheme: light) {
      color: var(--color-black);
    }
  }

  .intro {
    font-weight: var(--font-weight-bold);
  }

  .byline {
    @include typography.font-size(14px);
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
