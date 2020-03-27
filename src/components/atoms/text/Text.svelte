<script>
  import marked from 'marked';
  export let text;
</script>

<style global type="text/scss" lang="scss">
  @import "engine";

  @import "highlight.js/scss/a11y-light.scss";

  :global(a) {
    color: $green;
    font-weight: $font-weight-bold;
    transition: color $base-transition-duration $base-timing-function;

    #{$global-interaction-states} {
      color: $white;
    }
  }

  pre {
    background-color: $white;
    padding: 0.5em;
    color: $black;
    overflow: auto;
  }
</style>

{@html marked(text)}
