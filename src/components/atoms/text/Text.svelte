<script>
  import marked from 'marked';

  export let text;
  export let modifier;
</script>

<style type="text/scss" lang="scss">
  @use 'sass/vars';
  @use 'supple/lib/tools/mixins';

  :global(a) {
    color: var(--green);
    font-weight: vars.$font-weight-bold;

    #{vars.$global-interaction-states} {
      color: var(--white);
    }
  }

  .intro {
    font-weight: vars.$font-weight-bold;
  }

  .byline {
    @include mixins.font-size(vars.$micro);
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
