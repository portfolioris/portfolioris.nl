<script>
  import marked from 'marked';

  export let text;
  export let modifier;
</script>

<style type="text/scss" lang="scss">
  @import 'engine';

  :global(a) {
    color: var(--green);
    font-weight: $font-weight-bold;

    #{$global-interaction-states} {
      color: var(--white);
    }
  }

  .intro {
    font-weight: $font-weight-bold;
  }

  .byline {
    @include supple-font-size($micro);
  }
</style>

<div
  class:intro={modifier === 'intro'}
  class:byline={modifier === 'byline'}
>
    {#if text}
        {@html marked(text)}
    {:else}
      <p><slot /></p>
    {/if}
</div>
